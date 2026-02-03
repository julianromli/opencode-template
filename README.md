# OpenCode Template

Comprehensive template repository for OpenCode CLI - a powerful AI-assisted development environment with agents, commands, and skills.

## What is OpenCode?

OpenCode is an AI-powered development CLI that helps you build software faster through:
- **Agents**: Specialized AI assistants for different development tasks
- **Commands**: Pre-built workflows for common operations
- **Skills**: Reusable knowledge modules that enhance agent capabilities
- **Plugins**: Extensions that add custom functionality

## Quick Start

### Installation

1. Install OpenCode CLI (if not already installed)
2. Clone this template:
```bash
git clone https://github.com/julianromli/opencode-template.git
cd opencode-template
```

3. Initialize your project:
```bash
opencode init
```

### Basic Usage

Start OpenCode in your project:
```bash
opencode
```

Invoke an agent:
```bash
opencode agent <agent-name>
```

Run a command:
```bash
opencode command <command-name>
```

## Repository Structure

```
.
├── agent/              # AI agent definitions
│   ├── core/          # Core system agents
│   ├── development/   # Development-focused agents
│   ├── content/       # Content creation agents
│   ├── data/          # Data analysis agents
│   ├── meta/          # Meta-level agents
│   └── subagents/     # Specialized sub-agents
├── command/           # Command definitions
│   ├── openagents/    # OpenAgents-specific commands
│   └── prompt-engineering/ # Prompt optimization commands
├── skill/             # Skill modules
│   ├── backend-dev/   # Backend development patterns
│   ├── frontend-design/ # Frontend design guidelines
│   ├── next-best-practices/ # Next.js best practices
│   └── ...            # Many more specialized skills
├── plugin/            # Plugin scripts
├── tool/              # Custom tools
└── opencode.json      # OpenCode configuration
```

## Core Components

### Agents

Agents are specialized AI assistants that handle specific tasks:

- **Core Agents** (`agent/core/`):
  - `openagent.md` - General-purpose agent
  - `opencoder.md` - Coding-focused agent

- **Development Agents** (`agent/development/`):
  - `backend-specialist.md` - Backend development
  - `frontend-specialist.md` - Frontend development
  - `devops-specialist.md` - DevOps and infrastructure
  - `codebase-agent.md` - Codebase analysis

- **Specialized Agents**:
  - Database architects
  - Security coders
  - Code reviewers
  - Content writers
  - Data analysts

### Commands

Pre-built workflows for common tasks:

- **Development**:
  - `build-context-system.md` - Build context management
  - `debug.md` - Debugging workflows
  - `fix.md` - Bug fixing procedures
  - `refactor-clean.md` - Code refactoring
  - `test.md` - Testing workflows

- **Planning**:
  - `brainstorm.md` - Ideation sessions
  - `write-plan.md` - Project planning
  - `execute-plan.md` - Plan execution

- **Quality**:
  - `review.md` - Code review
  - `optimize.md` - Performance optimization
  - `validate-repo.md` - Repository validation

- **Content**:
  - `design-system.md` - Design system creation
  - `seo.md` - SEO optimization
  - `enhance.md` - Content enhancement

### Skills

Reusable knowledge modules that enhance agent capabilities:

- **Backend Development**:
  - `backend-dev/` - Backend patterns and practices
  - `database-design/` - Database architecture
  - `llm-application-dev/` - LLM app development

- **Frontend Development**:
  - `frontend-design/` - UI/UX design principles
  - `frontend-ui-animator/` - Animation patterns
  - `next-best-practices/` - Next.js optimization
  - `vercel-react-best-practices/` - React performance

- **Development Practices**:
  - `test-driven-development/` - TDD methodology
  - `code-refactoring/` - Refactoring strategies
  - `systematic-debugging/` - Debugging techniques
  - `subagent-driven-development/` - Multi-agent workflows

- **Tools & Utilities**:
  - `skill-creator/` - Create new skills
  - `shadcn-management/` - shadcn/ui component management
  - `browser/` - Browser automation
  - `using-git-worktrees/` - Git worktree workflows

## Configuration

### opencode.json

Main configuration file for OpenCode:

```json
{
  "version": "1.0",
  "agents": {
    "directory": "agent"
  },
  "commands": {
    "directory": "command"
  },
  "skills": {
    "directory": "skill"
  },
  "plugins": {
    "directory": "plugin"
  }
}
```

## Creating Custom Components

### Creating an Agent

1. Create a new `.md` file in `agent/` directory
2. Define agent capabilities and behavior
3. Reference relevant skills and tools

Example structure:
```markdown
# Agent Name

## Purpose
Brief description of what this agent does

## Capabilities
- Capability 1
- Capability 2

## Skills Used
- skill-name-1
- skill-name-2

## Instructions
Detailed instructions for the agent...
```

### Creating a Command

1. Create a new `.md` file in `command/` directory
2. Define command workflow and steps
3. Specify required inputs and outputs

### Creating a Skill

1. Create a new directory in `skill/`
2. Add `SKILL.md` with skill documentation
3. Add reference materials in `references/` subdirectory
4. Add scripts in `scripts/` subdirectory if needed

Use the `skill-creator` skill to automate this:
```bash
opencode skill create <skill-name>
```

## Advanced Features

### Subagents

Subagents are specialized agents that can be invoked by other agents:

- **Code Subagents** (`agent/subagents/code/`):
  - Build agent
  - Coder agent
  - Reviewer
  - Tester

- **Core Subagents** (`agent/subagents/core/`):
  - Context retriever
  - Documentation generator
  - Task manager

### Agent Categories

Organize agents using `0-category.json` files:

```json
{
  "name": "Category Name",
  "description": "Category description",
  "icon": "icon-name"
}
```

## Best Practices

### Agent Development

1. **Single Responsibility**: Each agent should have one clear purpose
2. **Skill Composition**: Leverage existing skills rather than duplicating knowledge
3. **Clear Instructions**: Provide explicit, step-by-step instructions
4. **Error Handling**: Include error handling and recovery strategies

### Command Development

1. **Modular Steps**: Break commands into clear, sequential steps
2. **Validation**: Include validation checks at each step
3. **Documentation**: Document inputs, outputs, and side effects
4. **Idempotency**: Commands should be safe to run multiple times

### Skill Development

1. **Focused Scope**: Keep skills focused on specific domains
2. **Reference Materials**: Include examples and reference documentation
3. **Versioning**: Track skill versions and changes
4. **Testing**: Test skills with multiple agents and scenarios

## Common Workflows

### Starting a New Project

```bash
# Initialize project
opencode init

# Generate project structure
opencode command design-system

# Set up development environment
opencode agent backend-specialist "Set up project structure"
```

### Code Review Workflow

```bash
# Request code review
opencode command review

# Or use the code reviewer agent directly
opencode agent code-reviewer "Review recent changes"
```

### Debugging Workflow

```bash
# Use systematic debugging
opencode command debug

# Or invoke debugging skill
opencode agent opencoder "Use systematic-debugging skill to fix issue"
```

## Troubleshooting

### Agent Not Found

Ensure agent file exists in `agent/` directory and is properly formatted.

### Skill Not Loading

Check:
1. Skill directory contains `SKILL.md`
2. Skill is referenced correctly in agent/command
3. File permissions are correct

### Command Fails

1. Check command syntax in `.md` file
2. Verify all required inputs are provided
3. Review error logs in `.opencode/` directory

## Contributing

### Adding New Agents

1. Create agent file in appropriate subdirectory
2. Follow naming convention: `kebab-case.md`
3. Include comprehensive documentation
4. Test with multiple scenarios

### Adding New Skills

1. Use `skill-creator` skill as template
2. Include `SKILL.md` with clear documentation
3. Add reference materials and examples
4. Test with multiple agents

### Submitting Changes

1. Fork the repository
2. Create feature branch
3. Make changes with clear commits
4. Submit pull request with description

## Resources

- **OpenCode Documentation**: [Official Docs]
- **Agent Examples**: See `agent/` directory
- **Skill Examples**: See `skill/` directory
- **Command Examples**: See `command/` directory

## License

See individual skill/component licenses in their respective directories.

## Support

For issues and questions:
- Open an issue on GitHub
- Check existing documentation in `docs/` directories
- Review skill-specific README files

---

**Note**: This template is designed to be customized for your specific needs. Feel free to add, remove, or modify agents, commands, and skills based on your workflow.
