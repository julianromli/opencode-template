# OpenCode Template

Professional OpenCode project configuration with agents, skills, and MCP integrations.

## Features

- **Multi-Agent System**: Specialized agents for backend, frontend, security, database, and TypeScript development
- **Custom Commands**: Brainstorm, debug, enhance, SEO, mobile-responsiveness, and more
- **Skill Framework**: Code review, refactoring, frontend design, UI animation, and 15+ other skills
- **MCP Integrations**: Next.js DevTools, Exa AI, Ref documentation, Supabase, Context7
- **Superpowers**: Advanced planning, subagent orchestration, and systematic debugging

## Setup

1. Clone this repository to your OpenCode config directory
2. Copy and configure your environment variables (see below)
3. Update `opencode.jsonc` with your preferences

## Required Environment Variables

Create a `.env` file or set these environment variables:

| Variable                | Description                |
| ----------------------- | -------------------------- |
| `CONTEXT7_API_KEY`      | Context7 MCP API key       |
| `REF_API_KEY`           | Ref documentation API key  |
| `EXA_API_KEY`           | Exa AI search API key      |
| `SUPABASE_PROJECT_REF`  | Supabase project reference |
| `SUPABASE_ACCESS_TOKEN` | Supabase access token      |
| `CLIPROXY_API_KEY`      | Cliproxy provider API key  |

## Project Structure

- `agent/` - Specialized agent definitions (backend, frontend, security, database, typescript)
- `command/` - Custom slash commands (brainstorm, debug, enhance, seo, etc.)
- `instructions/` - Development guidelines and coding preferences
- `plugin/` - Custom plugins (fs-tool, notification, superpowers)
- `skill/` - Reusable skills (code-review, frontend-design, ui-animator, etc.)
- `superpowers/` - Core framework extensions and advanced workflows

## Included Agents

| Agent                      | Description                                    |
| -------------------------- | ---------------------------------------------- |
| `backend-architect`        | API design and microservice architecture       |
| `backend-security-coder`   | Secure backend coding practices                |
| `backend-specialist`       | Full-stack backend development                 |
| `backend-typescript-architect` | TypeScript backend with Bun runtime        |
| `code-reviewer`            | Automated code review                          |
| `database-architect`       | Database schema and data modeling              |
| `database-optimizer`       | Query optimization and performance tuning      |
| `database-specialist`      | Comprehensive database operations              |
| `frontend-developer`       | Next.js, React, Tailwind development           |
| `frontend-security-coder`  | XSS prevention and client-side security        |
| `typescript-pro`           | Advanced TypeScript patterns                   |

## Included Commands

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `/brainstorm`        | Creative problem solving                 |
| `/debug`             | Systematic debugging workflow            |
| `/enhance`           | Code enhancement suggestions             |
| `/execute-plan`      | Execute a development plan               |
| `/fix`               | Quick fix for issues                     |
| `/mobile-responsiveness` | Mobile UI optimization               |
| `/review`            | Code review workflow                     |
| `/seo`               | SEO optimization                         |
| `/write-plan`        | Create development plans                 |

---
Built with [OpenCode](https://opencode.ai)
