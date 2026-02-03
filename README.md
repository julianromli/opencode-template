# OpenCode Template

Comprehensive template repository for OpenCode CLI - a powerful AI-assisted development environment with agents, commands, and skills.

## What is OpenCode?

OpenCode is an AI-powered development CLI that helps you build software faster through:
- **Agents**: Specialized AI assistants for different development tasks
- **Commands**: Pre-built workflows for common operations
- **Skills**: Reusable knowledge modules that enhance agent capabilities
- **Plugins**: Extensions that add custom functionality

## Quick Start

### Prerequisites

- OpenCode CLI installed
- Node.js 18+ (for MCP servers)
- Git

### Installation

1. Install OpenCode CLI (if not already installed)

2. Clone this template:
```bash
git clone https://github.com/julianromli/opencode-template.git
cd opencode-template
```

3. **Setup Environment Variables (IMPORTANT)**:

   **Windows (PowerShell as Administrator):**
   ```powershell
   cd scripts
   .\setup-env-windows.ps1
   ```

   **macOS/Linux:**
   ```bash
   cd scripts
   bash setup-env-mac.sh
   source ~/.zshrc  # or ~/.bashrc
   ```

   See `scripts/README.md` for detailed instructions and troubleshooting.

4. Initialize your project:
```bash
opencode init
```

5. Restart your terminal or IDE for environment variables to take effect

### Required Environment Variables

The setup scripts configure these essential variables:

```bash
OPENCODE_EXPERIMENTAL_PLAN_MODE=1    # Enable experimental features
OPENCODE_UNSAFE_ALLOW_OUTSIDE=1      # Allow operations outside workspace
OPENCODE_UNSAFE_FILES=1              # Enable file operations
OPENCODE_UNSAFE_INCLUDE_GIT=1        # Enable git operations
```

**Why these are needed:**
- Enable advanced OpenCode features
- Allow AI agents to perform file and git operations
- Required for full template functionality

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

## Model Context Protocol (MCP)

### What is MCP?

**Model Context Protocol (MCP)** is an open protocol that standardizes how applications provide context to large language models (LLMs). It enables AI applications to connect with various data sources and tools in a consistent, structured manner.

### MCP Architecture

MCP follows a client-server architecture:

- **MCP Hosts**: Applications like AI assistants or IDEs (e.g., OpenCode CLI)
- **MCP Clients**: Connectors within the host that maintain 1:1 connections with servers
- **MCP Servers**: Services that provide context, tools, and capabilities through the standardized protocol

### Available MCP Integrations

OpenCode CLI supports various MCP servers that extend AI capabilities:

#### 1. **Context7 MCP** (`mcp_context7`)
**Purpose**: Up-to-date library documentation and code examples

**Tools**:
- `resolve-library-id`: Find Context7-compatible library IDs (e.g., `/mongodb/docs`, `/vercel/next.js`)
- `query-docs`: Query documentation with specific questions

**Use Cases**:
- Getting latest API documentation
- Finding code examples for libraries
- Learning framework-specific patterns
- Checking version-specific features

**Example**:
```bash
# First resolve library ID
resolve-library-id libraryName="next.js" query="Next.js documentation"

# Then query specific docs
query-docs libraryId="/vercel/next.js" query="How to use App Router in Next.js 15"
```

#### 2. **Exa Web Search MCP** (`mcp_exa`)
**Purpose**: Advanced web search and research capabilities

**Tools**:
- `exa`: General web search with clean, LLM-ready content
- `company_research_exa`: Research companies and business information
- `crawling_exa`: Extract content from specific URLs
- `get_code_context_exa`: Find code examples and documentation
- `deep_researcher_start`: Start AI research agent for complex topics
- `deep_researcher_check`: Check research task status and results

**Use Cases**:
- Finding current information and news
- Researching companies and technologies
- Extracting content from web pages
- Finding code examples from GitHub/Stack Overflow
- Deep research on complex topics

**Example**:
```bash
# Web search
exa query="Next.js 15 new features" numResults=5

# Code search
get_code_context_exa query="React Server Components examples" tokensNum=5000

# Deep research
deep_researcher_start instructions="Research best practices for microservices architecture"
```

#### 3. **Next.js DevTools MCP** (`mcp_next_devtools`)
**Purpose**: Next.js development server integration and diagnostics

**Tools**:
- `init`: Initialize Next.js DevTools context
- `nextjs_docs`: Fetch official Next.js documentation
- `nextjs_index`: Discover running Next.js dev servers and available tools
- `nextjs_call`: Call specific MCP tools on running dev server
- `browser_eval`: Browser automation for testing
- `upgrade_nextjs_16`: Guide for upgrading to Next.js 16
- `enable_cache_components`: Migrate to Cache Components mode

**Use Cases**:
- Real-time Next.js error diagnostics
- Querying running dev server state
- Browser-based page verification
- Next.js version upgrades
- Cache Components migration

**Example**:
```bash
# Initialize
init project_path="."

# Get errors from running dev server
nextjs_index
nextjs_call port="3000" toolName="get_errors"

# Query Next.js docs
nextjs_docs path="/docs/app/api-reference/functions/refresh"
```

### Configuring MCP Servers

MCP servers are configured in `.kiro/settings/mcp.json` (workspace-level) or `~/.kiro/settings/mcp.json` (user-level):

```json
{
  "mcpServers": {
    "context7": {
      "command": "uvx",
      "args": ["context7-mcp-server@latest"],
      "disabled": false,
      "autoApprove": ["resolve-library-id", "query-docs"]
    },
    "exa": {
      "command": "uvx",
      "args": ["exa-mcp-server@latest"],
      "env": {
        "EXA_API_KEY": "your-api-key-here"
      },
      "disabled": false
    }
  }
}
```

### MCP Best Practices

1. **Always call `resolve-library-id` before `query-docs`** (Context7)
2. **Limit MCP calls to 3 per question** to avoid excessive API usage
3. **Use specific queries** - "How to set up JWT auth in Express" not just "auth"
4. **Check dev server status** before calling Next.js MCP tools
5. **Use browser automation** for real page verification (not curl)

### Installing MCP Servers

Most MCP servers use `uvx` (Python package runner):

```bash
# Install uv (Python package manager)
# Windows (PowerShell)
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

# macOS/Linux
curl -LsSf https://astral.sh/uv/install.sh | sh

# Once installed, uvx will auto-download MCP servers on first use
```

### Troubleshooting MCP

**Server not connecting:**
- Check MCP config file syntax
- Verify `uvx` is installed
- Check server logs in OpenCode output

**Tools not available:**
- Restart OpenCode after config changes
- Check `disabled: false` in config
- Verify API keys for services that require them

**Performance issues:**
- Limit concurrent MCP calls
- Use specific queries to reduce response size
- Consider caching frequently accessed data

## Resources

- **OpenCode Documentation**: [Official Docs]
- **MCP Official Site**: https://modelcontextprotocol.io
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
- Visit MCP documentation for protocol-specific questions

---

**Note**: This template is designed to be customized for your specific needs. Feel free to add, remove, or modify agents, commands, and skills based on your workflow.
