# Agent-Specific Rules

## Frontend Developer Agent

**MANDATORY:** The `frontend-developer` agent MUST ALWAYS invoke the `frontend-design` skill at the beginning of EVERY task before doing any work.

This is a non-negotiable requirement that applies to ALL tasks assigned to the frontend-developer agent, without exception:

- Before writing any code
- Before making any UI changes
- Before implementing any feature
- Before fixing any bug
- Before any refactoring

The agent must call:
```
use_skill("frontend-design")
```

This ensures consistent, high-quality, production-grade frontend output with distinctive design quality.
