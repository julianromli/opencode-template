---
description: Analyze codebase and generate a complete design-system.md documentation
argument-hint: <optional-path>
---

# Task: Generate Design System Documentation

You are a senior product designer and frontend architect.
Your task is to generate a complete `docs/design-system.md` for this repository, based on the existing codebase and UI patterns.

## Goals

- Document the current design system as it is implemented in the code.
- Make the document useful both for humans (dev/designer) and for AI tools (Copilot/Claude/etc.) when working in this repo.

---

## Output Structure for `design-system.md`

### 1. Overview
- Short description of the product and UI vibe.
- High-level principles (tone, accessibility, responsiveness).

### 2. Foundations

#### Colors
- Primary, secondary, neutrals, semantic (success/warning/error/info) with hex values and usage notes.

#### Typography
- Font families, scales (heading/body/caption), line-heights, letter-spacing, and when to use each.

#### Spacing
- Base unit (e.g. 4/8px), spacing scale, and examples.

#### Radius, Shadows, Borders
- Tokens and intended usage.

#### Breakpoints
- List viewport sizes and naming (e.g. sm/md/lg/xl).

### 3. Components

For each commonly used component (Buttons, Inputs, Selects, Modals, Cards, Tabs, Toasts, etc.):
- Name and purpose.
- Props/variants (e.g. `variant`, `size`, `tone`, `state`).
- Visual behavior (hover, active, focus, disabled, loading).
- Do / Don't usage guidelines.
- Example code snippet from this repo.

### 4. Layout & Grid
- Page layout patterns (sidebar, top-nav, content width).
- Grid rules (columns, gutters, max-widths).
- Common layout primitives (Stack/Flex/Grid components, containers).

### 5. Patterns

#### Form Patterns
- Validation, error display, help text.

#### Navigation Patterns
- Routing, breadcrumbs, tabs.

#### Feedback Patterns
- Empty states, loading, error, success.

### 6. Theming & Dark Mode (if applicable)
- How themes are defined (tokens, CSS variables, Tailwind config, etc.).
- What can be customized and how.

### 7. Usage for AI Tools
Short instructions for AI assistants working in this repo:
- "Always respect these components and tokens instead of raw HTML/CSS."
- "When creating new UI, match these patterns and reuse existing components."

---

## Your Process

### Phase 1: Repository Analysis

Scan the codebase to gather information from:

1. **Design Tokens & Config**
   - Tailwind config (`tailwind.config.js`, `tailwind.config.ts`)
   - Theme files, CSS variables
   - CSS-in-JS configurations
   - Token definitions

2. **Component Library**
   - Reusable UI component folders (e.g. `components/ui`, `src/components`, `apps/*/components`)
   - shadcn/ui components (if present)
   - Component props and variants

3. **Existing Documentation**
   - Storybook docs (if present)
   - README files in component directories
   - Any existing design docs

4. **Usage Patterns**
   - How components are used throughout the codebase
   - Common layouts and page structures
   - Form patterns and validation approaches

### Phase 2: Generate Documentation

Based on your analysis:

1. **Extract real values** - Use actual color hex codes, font names, spacing values from the config.
2. **Document real components** - Only include components that exist in the codebase.
3. **Include real examples** - Code snippets should come from actual files in the repo.
4. **Note gaps** - If certain design system elements are missing, note them as recommendations.

---

## Important Requirements

### Style
- Write in clear, concise Markdown.
- Use heading hierarchy (`#`, `##`, `###`) properly.
- Use bullet lists and short paragraphs.
- Include code blocks with proper syntax highlighting.

### Accuracy
- **Do not invent** new components or tokens that don't exist in the repo.
- Prefer real names/tokens from the code over generic names.
- Be explicit and opinionated so new contributors and AI tools can follow consistently.
- If something is unclear from the codebase, mark it as `[TO BE DEFINED]`.

### Completeness
- Cover all major UI elements used in the application.
- Include both the "what" (tokens, components) and the "how" (usage guidelines).
- Make it actionable for developers implementing new features.

---

## Output Format

Generate the complete `docs/design-system.md` file ready to be saved.

```
---
File: `docs/design-system.md`
---
[full content here]
```

---

## Quality Checklist

Before generating, verify:

- [ ] All color values are extracted from actual config files
- [ ] All component names match the actual component files
- [ ] Code examples use real import paths from the repo
- [ ] Typography scales match the actual Tailwind/CSS config
- [ ] Spacing values match the actual design tokens
- [ ] No invented components or tokens
- [ ] AI usage section provides actionable guidance
- [ ] Document is scannable with clear headings and lists
