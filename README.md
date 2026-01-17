# Opencode Template

Welcome to the **Opencode Template**! This repository serves as a comprehensive configuration and capability suite for **Opencode**, an advanced AI coding assistant environment. It provides a structured foundation of specialized agents, custom commands, and modular skills to enhance your development workflow.

## 🚀 Overview

This template transforms your AI coding experience by providing:
- **Specialized Agents**: Expert personas for specific tasks (e.g., Backend Architect, Frontend Developer).
- **Skill Library**: A rich collection of step-by-step capabilities that agents can "load" to perform complex tasks (e.g., TDD, UI Design).
- **Custom Commands**: Slash commands to trigger specific workflows or agents efficiently.
- **Context Management**: A structured approach to providing domain-specific knowledge to your agents.

## 📂 Project Structure

### 1. Agents (`agent/`)
Defines the specialized personas available in this environment. Each agent is tuned for specific roles:
- **Architects**: `backend-architect`, `database-architect`, `backend-typescript-architect`
- **Developers**: `frontend-developer`, `backend-specialist`, `typescript-pro`
- **Security**: `backend-security-coder`, `frontend-security-coder`
- **Review & QA**: `code-reviewer`, `eval-runner`

### 2. Skills (`skills/`)
The core "superpowers" of the system. Agents load these skills to gain specialized knowledge and procedural guidance.
- **Development**: `test-driven-development`, `subagent-driven-development`, `verification-before-completion`
- **Design**: `frontend-design`, `web-design-guidelines`, `ui-ux-pro-max`
- **Process**: `writing-plans`, `systematic-debugging`, `code-review`
- **Tooling**: `using-git-worktrees`, `windows-safe-grep`

### 3. Commands (`command/`)
Custom slash commands that route you to the right agent or workflow instantly.
- `/brainstorm` - Start a creative session.
- `/commit` - Generate smart commit messages.
- `/fix` - Debugging workflows.
- `/plan` - Trigger planning agents.

### 4. Superpowers (`superpowers/`)
The engine room for extended capabilities, providing the hooks and logic that allow agents to execute complex, multi-step behaviors and integrate deeply with the environment.

### 5. Context (`context/`)
A dedicated space for domain-specific documentation, standards, and guides. This structure ensures agents have access to the right "long-term memory" regarding your specific project's domain, design systems, and coding standards.

## ⚙️ Configuration

- **`opencode.json`**: The central configuration file. It defines:
  - Enabled plugins (Firecrawl MCP, etc.)
  - Tool definitions and permissions.
  - Agent and command mappings.
- **`AGENTS.md`**: The rulebook. Defines global operational rules, communication protocols, and mandatory behaviors (e.g., safety checks, design guideline adherence) that all agents must follow.

## 🛠️ Usage

This template is designed to be plug-and-play for Opencode.
1. **Initialize**: Ensure your Opencode configuration points to this directory.
2. **Interact**: Use natural language or slash commands.
   - *"Act as a backend architect and design a schema for..."*
   - *"/brainstorm a new feature for..."*
   - *"Refactor this component using strict TDD."*

## 🤝 Contributing

Feel free to extend this template by adding new specialized agents in `agent/` or defining new workflows in `skills/`.
