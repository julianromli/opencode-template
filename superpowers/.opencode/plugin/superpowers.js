/**
 * Superpowers plugin for OpenCode.ai
 * VERSI: 2.0.0 (AUTO-ACTIVE - Antigravity & Thinking Compatible)
 *
 * PERUBAHAN DARI v1.1.0:
 * - Auto-active: Superpowers context otomatis tersedia di tool descriptions
 * - Tidak menggunakan client.session.prompt() (penyebab error thinking)
 * - Tools mengembalikan content langsung sebagai output
 *
 * KOMPATIBEL DENGAN:
 * - Claude Opus/Sonnet Thinking models
 * - Gemini models
 * - OpenAI GPT models
 */

import path from "path";
import fs from "fs";
import os from "os";
import { tool } from "@opencode-ai/plugin/tool";

const homeDir = os.homedir();
const superpowersDir = path.join(homeDir, ".config", "opencode", "superpowers");
const skillsCoreModule = path.join(superpowersDir, "lib", "skills-core.js");

let skillsCore = null;
const loadSkillsCore = async () => {
  if (!skillsCore) {
    try {
      skillsCore = await import(skillsCoreModule);
    } catch (err) {
      console.error("Failed to load skills-core.js:", err.message);
      skillsCore = {
        resolveSkillPath: () => null,
        stripFrontmatter: (content) => content,
        extractFrontmatter: () => ({}),
        findSkillsInDir: () => [],
      };
    }
  }
  return skillsCore;
};

// Pre-load superpowers context for tool descriptions
let superpowersContext = null;
const getSuperpowersContext = async () => {
  if (superpowersContext) return superpowersContext;

  const core = await loadSkillsCore();
  const superpowersSkillsDir = path.join(superpowersDir, "skills");
  const personalSkillsDir = path.join(homeDir, ".config", "opencode", "skills");

  const usingSuperpowersPath = core.resolveSkillPath(
    "using-superpowers",
    superpowersSkillsDir,
    personalSkillsDir,
  );
  if (!usingSuperpowersPath) {
    superpowersContext = "";
    return superpowersContext;
  }

  try {
    const fullContent = fs.readFileSync(usingSuperpowersPath.skillFile, "utf8");
    superpowersContext = core.stripFrontmatter(fullContent);
  } catch (err) {
    superpowersContext = "";
  }

  return superpowersContext;
};

// Initialize context on module load
getSuperpowersContext();

export const SuperpowersPlugin = async ({ client, directory }) => {
  const core = await loadSkillsCore();
  const context = await getSuperpowersContext();

  const projectSkillsDir = path.join(directory, ".opencode", "skills");
  const superpowersSkillsDir = path.join(superpowersDir, "skills");
  const personalSkillsDir = path.join(homeDir, ".config", "opencode", "skills");

  // Build skills list for description
  let skillsList = "";
  try {
    const projectSkills = core.findSkillsInDir(projectSkillsDir, "project", 3);
    const personalSkills = core.findSkillsInDir(
      personalSkillsDir,
      "personal",
      3,
    );
    const superpowersSkills = core.findSkillsInDir(
      superpowersSkillsDir,
      "superpowers",
      3,
    );
    const allSkills = [
      ...projectSkills,
      ...personalSkills,
      ...superpowersSkills,
    ];

    skillsList = allSkills
      .slice(0, 10)
      .map((s) => {
        const ns =
          s.sourceType === "project"
            ? "project:"
            : s.sourceType === "personal"
              ? ""
              : "superpowers:";
        return `${ns}${s.name || path.basename(s.path)}`;
      })
      .join(", ");
  } catch (err) {
    skillsList =
      "brainstorming, project-kickoff, code-review, debugging, refactoring";
  }

  return {
    tool: {
      // Main skill loading tool with superpowers context embedded in description
      use_skill: tool({
        description: `Load a skill to guide your work. YOU HAVE SUPERPOWERS - specialized skills for various tasks.

AVAILABLE SKILLS: ${skillsList || "Run find_skills to see all"}

USAGE: use_skill("superpowers:brainstorming") or use_skill("project:my-skill")

TOOL MAPPING for OpenCode:
- TodoWrite → update_plan
- Task with subagents → @mention system
- Skill tool → use_skill
- File operations → Native OpenCode tools

SKILLS PRIORITY: project: > personal > superpowers:`,
        args: {
          skill_name: tool.schema
            .string()
            .describe(
              'Skill name with namespace (e.g., "superpowers:brainstorming", "project:my-skill")',
            ),
        },
        execute: async (args) => {
          const { skill_name } = args;
          const forceProject = skill_name.startsWith("project:");
          const actualSkillName = skill_name.replace(
            /^(project:|superpowers:|personal:)/,
            "",
          );
          let resolved = null;

          // Check project skills first
          if (forceProject || !skill_name.startsWith("superpowers:")) {
            const projectSkillFile = path.join(
              projectSkillsDir,
              actualSkillName,
              "SKILL.md",
            );
            if (fs.existsSync(projectSkillFile)) {
              resolved = {
                skillFile: projectSkillFile,
                sourceType: "project",
                skillPath: actualSkillName,
              };
            }
          }

          // Then check superpowers/personal
          if (!resolved && !forceProject) {
            resolved = core.resolveSkillPath(
              skill_name,
              superpowersSkillsDir,
              personalSkillsDir,
            );
          }

          if (!resolved) {
            return `❌ Skill "${skill_name}" not found.\n\nUse find_skills to see available skills.`;
          }

          try {
            const fullContent = fs.readFileSync(resolved.skillFile, "utf8");
            const { name, description } = core.extractFrontmatter(
              resolved.skillFile,
            );
            const content = core.stripFrontmatter(fullContent);

            // Return content directly - no session.prompt injection
            return `# 🎯 SKILL LOADED: ${name || skill_name}

${description ? `**Description:** ${description}\n` : ""}
**Source:** ${resolved.sourceType}
**Path:** ${path.dirname(resolved.skillFile)}

---

${content}

---
✅ Follow the instructions above to complete this skill.`;
          } catch (err) {
            return `❌ Error loading skill: ${err.message}`;
          }
        },
      }),

      // Find skills tool
      find_skills: tool({
        description:
          "List all available superpowers skills. Use this to discover what skills you can load with use_skill.",
        args: {},
        execute: async () => {
          const projectSkills = core.findSkillsInDir(
            projectSkillsDir,
            "project",
            3,
          );
          const personalSkills = core.findSkillsInDir(
            personalSkillsDir,
            "personal",
            3,
          );
          const superpowersSkills = core.findSkillsInDir(
            superpowersSkillsDir,
            "superpowers",
            3,
          );
          const allSkills = [
            ...projectSkills,
            ...personalSkills,
            ...superpowersSkills,
          ];

          if (allSkills.length === 0) {
            return "❌ No skills found. Check if superpowers is installed at ~/.config/opencode/superpowers/";
          }

          let output = `# 🦸 SUPERPOWERS SKILLS\n\n`;
          output += `You have ${allSkills.length} skills available. Use \`use_skill("namespace:skill-name")\` to load one.\n\n`;

          // Group by source
          const grouped = { project: [], personal: [], superpowers: [] };
          for (const skill of allSkills) {
            grouped[skill.sourceType]?.push(skill);
          }

          if (grouped.project.length > 0) {
            output += `## 📁 Project Skills\n`;
            for (const skill of grouped.project) {
              output += `- **project:${skill.name || path.basename(skill.path)}** - ${skill.description || "No description"}\n`;
            }
            output += "\n";
          }

          if (grouped.personal.length > 0) {
            output += `## 👤 Personal Skills\n`;
            for (const skill of grouped.personal) {
              output += `- **${skill.name || path.basename(skill.path)}** - ${skill.description || "No description"}\n`;
            }
            output += "\n";
          }

          if (grouped.superpowers.length > 0) {
            output += `## 🦸 Superpowers Skills\n`;
            for (const skill of grouped.superpowers) {
              output += `- **superpowers:${skill.name || path.basename(skill.path)}** - ${skill.description || "No description"}\n`;
            }
            output += "\n";
          }

          output += `---\n💡 **Tip:** Use \`use_skill("superpowers:brainstorming")\` to load a skill.`;

          return output;
        },
      }),

      // Quick superpowers info
      superpowers_info: tool({
        description: "Get quick info about your superpowers capabilities.",
        args: {},
        execute: async () => {
          const projectSkills = core.findSkillsInDir(
            projectSkillsDir,
            "project",
            3,
          );
          const personalSkills = core.findSkillsInDir(
            personalSkillsDir,
            "personal",
            3,
          );
          const superpowersSkills = core.findSkillsInDir(
            superpowersSkillsDir,
            "superpowers",
            3,
          );

          return `# 🦸 SUPERPOWERS ACTIVE

You have superpowers! Here's what you can do:

## Available Skills
- **Project:** ${projectSkills.length} skills
- **Personal:** ${personalSkills.length} skills
- **Superpowers:** ${superpowersSkills.length} skills

## Quick Commands
- \`find_skills\` - List all available skills
- \`use_skill("superpowers:brainstorming")\` - Load a skill
- \`use_skill("superpowers:code-review")\` - Code review skill
- \`use_skill("superpowers:debugging")\` - Debugging skill

## Tool Mapping
| Claude Code | OpenCode |
|-------------|----------|
| TodoWrite | update_plan |
| Task | @mention |
| Skill | use_skill |

🚀 Ready to use superpowers!`;
        },
      }),
    },
    // NOTE: No event handlers - avoiding client.session.prompt() which causes thinking model errors
  };
};
