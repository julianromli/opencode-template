# OpenCode Template

Professional OpenCode project configuration with agents, skills, context system, and MCP integrations.

## Features

- **Multi-Agent System**: Orchestrator and specialized agents for content, development, data, meta, and product domains
- **Subagent Framework**: Code, core, system-builder, and utility subagents for delegated tasks
- **Context System**: Hierarchical context files for development, UI, content creation, and more
- **Custom Commands**: Commit, clean, optimize, test, design-system, prompt-engineering, and more
- **Skill Framework**: 20+ skills including code-review, frontend-design, UI animation, backend-dev, and browser automation
- **MCP Integrations**: Next.js DevTools, Exa AI, Ref documentation, Supabase, Context7, Firecrawl

## Setup

1. Clone this repository to your OpenCode config directory
2. Copy and configure your environment variables (see below)
3. Update `opencode.json` with your preferences

## Required Environment Variables

Create a `.env` file or set these environment variables:

| Variable                | Description                |
| ----------------------- | -------------------------- |
| `CONTEXT7_API_KEY`      | Context7 MCP API key       |
| `REF_API_KEY`           | Ref documentation API key  |
| `EXA_API_KEY`           | Exa AI search API key      |
| `SUPABASE_PROJECT_REF`  | Supabase project reference |
| `SUPABASE_ACCESS_TOKEN` | Supabase access token      |

## Project Structure

```
├── agent/                    # Agent definitions
│   ├── content/              # Copywriter, technical writer
│   ├── core/                 # OpenAgent, OpenCoder
│   ├── data/                 # Data analyst
│   ├── development/          # Backend, frontend, devops specialists
│   ├── learning/             # Learning-related agents
│   ├── meta/                 # Repo manager, system builder
│   ├── product/              # Product-related agents
│   └── subagents/            # Delegated task agents
│       ├── code/             # Build, coder, reviewer, tester
│       ├── core/             # Context retriever, task manager
│       ├── system-builder/   # Agent/command/context generators
│       └── utils/            # Image specialist
├── command/                  # Custom slash commands
│   ├── openagents/           # OpenAgents-specific commands
│   └── prompt-engineering/   # Prompt enhancer/optimizer
├── context/                  # Hierarchical context files
│   ├── content-creation/     # Content formats, principles, workflows
│   ├── core/                 # Standards, workflows, context system
│   ├── development/          # API design, clean code, UI patterns
│   ├── openagents-repo/      # OpenAgents repository context
│   ├── ui/                   # Web and terminal UI context
│   └── ...
├── instructions/             # Development guidelines and preferences
├── skills/                   # Reusable skill definitions
│   ├── agents-md-generator/
│   ├── artifacts-builder/
│   ├── backend-dev/
│   ├── browser/
│   ├── code-review/
│   ├── frontend-design/
│   ├── ui-ux-pro-max/
│   └── ...
└── superpowers/              # Framework extensions
    └── skills/               # Additional superpowers skills
```

## Included Agents

| Agent                 | Category    | Description                              |
| --------------------- | ----------- | ---------------------------------------- |
| `openagent`           | Core        | Main orchestrator agent                  |
| `opencoder`           | Core        | General coding agent                     |
| `backend-specialist`  | Development | Full-stack backend development           |
| `frontend-specialist` | Development | Frontend development with React/Next.js  |
| `devops-specialist`   | Development | DevOps and infrastructure                |
| `codebase-agent`      | Development | Codebase exploration and analysis        |
| `copywriter`          | Content     | Content writing and copywriting          |
| `technical-writer`    | Content     | Technical documentation                  |
| `data-analyst`        | Data        | Data analysis and insights               |
| `system-builder`      | Meta        | Build agent systems and workflows        |
| `repo-manager`        | Meta        | Repository management                    |

## Included Commands

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `/commit`              | Git commit workflow                      |
| `/clean`               | Code cleanup                             |
| `/optimize`            | Performance optimization                 |
| `/test`                | Testing workflow                         |
| `/design-system`       | Design system management                 |
| `/context`             | Context system operations                |
| `/build-context-system`| Build context hierarchy                  |
| `/validate-repo`       | Repository validation                    |
| `/prompt-enhancer`     | Enhance prompts                          |
| `/prompt-optimizer`    | Optimize prompts                         |

## Included Skills

| Skill                  | Description                              |
| ---------------------- | ---------------------------------------- |
| `frontend-design`      | Production-grade frontend interfaces     |
| `frontend-ui-animator` | UI animations with Tailwind/React        |
| `backend-dev`          | Backend development workflow             |
| `code-review`          | Automated code review                    |
| `code-refactoring`     | Code improvement patterns                |
| `database-design`      | Database schema and optimization         |
| `browser`              | Browser automation with Playwright       |
| `ui-ux-pro-max`        | Advanced UI/UX design intelligence       |
| `shadcn-management`    | shadcn/ui component management           |
| `skill-creator`        | Create new skills                        |

---
Built with [OpenCode](https://opencode.ai)
