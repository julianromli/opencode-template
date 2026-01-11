# OpenCode Template

Professional OpenCode project configuration with agents, skills, context system, and MCP integrations.

## Features

- **Multi-Agent System**: Orchestrator and specialized agents for content, development, data, meta, and product domains
- **Subagent Framework**: Code, core, system-builder, and utility subagents for delegated tasks
- **Context System**: Hierarchical context files for development, UI, content creation, and more
- **Custom Commands**: 25+ slash commands for brainstorming, debugging, planning, SEO, and more
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

### Core Agents

| Agent                 | Description                                                              |
| --------------------- | ------------------------------------------------------------------------ |
| `openagent`           | Universal agent for answering queries, executing tasks, and coordinating workflows |
| `opencoder`           | Multi-language implementation agent for modular and functional development |
| `system-builder`      | Main orchestrator for building complete context-aware AI systems         |

### Development Agents

| Agent                          | Description                                                              |
| ------------------------------ | ------------------------------------------------------------------------ |
| `backend-architect`            | Design RESTful APIs, microservice boundaries, and database schemas       |
| `backend-specialist`           | Full-stack backend development with API design and database integration  |
| `backend-typescript-architect` | Expert backend development in TypeScript with Bun runtime                |
| `backend-security-coder`       | Secure backend coding: input validation, authentication, API security   |
| `frontend-developer`           | Next.js 16+, React 19, Cache Components, shadcn/ui, and Tailwind CSS    |
| `frontend-security-coder`      | XSS prevention, output sanitization, and client-side security patterns  |
| `devops-specialist`            | DevOps and infrastructure automation                                     |
| `codebase-agent`               | Codebase exploration and analysis                                        |

### Database Agents

| Agent                 | Description                                                              |
| --------------------- | ------------------------------------------------------------------------ |
| `database-architect`  | Data layer design, technology selection, schema modeling, scalable architectures |
| `database-optimizer`  | Query optimization, advanced indexing, caching, partitioning strategies  |
| `database-specialist` | Comprehensive database operations and management                         |

### Content & Other Agents

| Agent              | Description                                                 |
| ------------------ | ----------------------------------------------------------- |
| `copywriter`       | Persuasive writing, marketing copy, and brand messaging     |
| `technical-writer` | Documentation, API docs, and technical communication        |
| `data-analyst`     | Data analysis and insights                                  |
| `repo-manager`     | Repository management and maintenance                       |
| `code-reviewer`    | Automated code review against plans and coding standards    |
| `typescript-pro`   | Advanced TypeScript types, generics, and strict type safety |
| `eval-runner`      | Test harness for evaluation framework (internal use)        |

## Included Commands

### Planning & Execution

| Command                     | Description                                               |
| --------------------------- | --------------------------------------------------------- |
| `/brainstorm [topic]`       | Start a collaborative design brainstorming session        |
| `/write-plan [doc-path]`    | Create a detailed implementation plan with bite-sized tasks |
| `/writing-plans [doc-path]` | Create a detailed implementation plan                     |
| `/execute-plan [plan-file]` | Execute plan using subagent-driven development with TDD   |
| `/subagent-driven-development [plan]` | Execute plan using subagent-driven approach     |
| `/ultra-think [question]`   | Deep analysis and problem solving mode                    |

### Debugging & Fixing

| Command               | Description                                               |
| --------------------- | --------------------------------------------------------- |
| `/debug [error]`      | Systematically investigate and fix a bug or error         |
| `/fix [bug]`          | Diagnose and fix bugs with architecture-aware analysis    |

### Frontend Enhancement

| Command                        | Description                                               |
| ------------------------------ | --------------------------------------------------------- |
| `/enhance [page/component]`    | Enhance frontend to pixel-perfect standards               |
| `/mobile-responsiveness [target]` | Implement mobile responsiveness and accessibility      |
| `/seo [page/all]`              | Implement comprehensive SEO optimizations                 |
| `/design-system`               | Design system management                                  |

### Code Quality & Review

| Command         | Description                                               |
| --------------- | --------------------------------------------------------- |
| `/review`       | Code review workflow                                      |
| `/clean`        | Code cleanup                                              |
| `/optimize`     | Performance optimization                                  |
| `/test`         | Testing workflow                                          |

### Git & Repository

| Command               | Description                                               |
| --------------------- | --------------------------------------------------------- |
| `/commit`             | Git commit workflow                                       |
| `/commit-openagents`  | Commit workflow for OpenAgents repository                 |
| `/worktrees`          | Manage git worktrees for parallel development workflows   |
| `/validate-repo`      | Repository validation                                     |

### Context & System

| Command                  | Description                                               |
| ------------------------ | --------------------------------------------------------- |
| `/context`               | Context system operations                                 |
| `/build-context-system`  | Build context hierarchy                                   |
| `/generate-agents [path]`| Analyze codebase and generate hierarchical AGENTS.md      |
| `/data-model`            | Generate ERD and data documentation for the project       |

### Utilities

| Command                           | Description                                    |
| --------------------------------- | ---------------------------------------------- |
| `/superpowers`                    | Activate the Superpowers skill                 |
| `/prompt-enhancer`                | Enhance prompts                                |
| `/prompt-optimizer`               | Optimize prompts                               |

### OpenAgents-Specific

| Command                              | Description                                    |
| ------------------------------------ | ---------------------------------------------- |
| `/openagents/check-context-deps`     | Check context dependencies                     |
| `/openagents/new-agents/create-agent`| Create a new agent                             |
| `/openagents/new-agents/create-tests`| Create tests for agents                        |

## Included Skills

| Skill                  | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| `frontend-design`      | Production-grade frontend interfaces with high design quality |
| `frontend-ui-animator` | UI animations with Tailwind/React                        |
| `frontend-ui-integration` | Implement UI workflows with existing backend APIs     |
| `backend-dev`          | Comprehensive backend development workflow               |
| `code-review`          | Automated code review for PRs                            |
| `code-refactoring`     | Code improvement patterns                                |
| `database-design`      | Database schema design and optimization                  |
| `browser`              | Browser automation with Playwright                       |
| `ui-ux-pro-max`        | Advanced UI/UX design intelligence with 50 styles        |
| `shadcn-management`    | shadcn/ui component management                           |
| `skill-creator`        | Create new skills                                        |
| `agents-md-generator`  | Generate hierarchical AGENTS.md structures               |
| `artifacts-builder`    | Build elaborate multi-component HTML artifacts           |
| `changelog-generator`  | Create user-facing changelogs from git commits           |
| `javascript-typescript`| JavaScript and TypeScript development                    |
| `python-development`   | Modern Python development with Django/FastAPI            |
| `llm-application-dev`  | Building applications with LLMs and RAG patterns         |
| `product-management`   | PRDs, feature analysis, roadmap planning                 |
| `rsc-data-optimizer`   | Optimize Next.js data fetching with Server Components    |
| `task-generator`       | Generate structured task lists from specs                |

---
Built with [OpenCode](https://opencode.ai)
