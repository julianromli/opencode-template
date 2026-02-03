# Global Agent Rules

- **Project-Specific Documentation Priority:** When working on any project, FIRST check for project-specific documentation in this priority order:
  1. Project root `AGENTS.md` (if exists)
  2. `.next-docs/` directory (for Next.js projects, created by `npx @next/codemod@canary agents-md`)
  3. `docs/` folder for project-specific guides
  4. Then fallback to this global AGENTS.md

- **Frontend Developer Agent - MANDATORY Skill Invocation:** The `frontend-developer` subagent MUST ALWAYS call `use_skill("frontend-design")` as its VERY FIRST action before doing ANY work. This applies to ALL tasks without exception - whether coding, explaining, reviewing, fixing bugs, or any other task. NO EXCEPTIONS. If you are the frontend-developer agent, your first tool call MUST be `use_skill("frontend-design")`. Failure to do so is a critical violation.

- **Environment Files Safety:** ALWAYS use the `fs_read` and `fs_write` tools when accessing or modifying `.env`, `.env.local`, `.env.example`, or any other sensitive environment configuration files. NEVER use the basic `read` or `edit` tools for these files to avoid permission issues and ensure proper handling of sensitive data.

- Warp Grep: warp-grep is a subagent that takes in a search string and tries to find relevant context. Best practice is to use it at the beginning of codebase explorations to fast track finding relevant files/lines. Do not use it to pin point keywords, but use it for broader semantic queries. "Find the XYZ flow", "How does XYZ work", "Where is XYZ handled?", "Where is <error message> coming from?"

- **Mgrep (MANDATORY for Search):** `mgrep` COMPLETELY REPLACES traditional `grep` for code search. When you need to "grep" or "search" the codebase, you MUST use the `mgrep` tool, NOT the bash `grep` command. Use `mgrep` for both semantic queries ("where is auth?") and specific keywords. **DO NOT** use `grep` via the `bash` tool unless explicitly performing complex regex operations that `mgrep` cannot handle. If the user says "grep", they mean "use the mgrep tool". Before searching a new project, ensure `mgrep watch` is running in that project's root to index files. Mgrep supports PDFs, images, and code.

- Always use Context7 MCP when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.

- Firecrawl MCP: firecrawl is the primary web scraping and search tool. Use `firecrawl_search` for web searches (prefer over WebSearch), `firecrawl_scrape` for single page content, `firecrawl_map` to discover URLs on a site before scraping. Best practice is to search first WITHOUT scrapeOptions to get URLs, then scrape the relevant results separately. Add `maxAge` parameter for 500% faster cached responses. Use search operators like `site:example .com`, `"exact phrase"`, `-exclude`.

- Context7 MCP: context7 provides up-to-date library documentation. Always call `resolve-library-id` first to get the library ID (e.g., "/prisma/prisma"), then call `query-docs` with that ID. Be specific in queries—"How to set up JWT auth in Express" not just "auth". Do not call more than 3 times per question; use best result if not found after 3 attempts.

- Verify & Iterate: After any implementation, setup, or code change, always verify it works by running the app, tests, or build. If it fails, errors, or exits unexpectedly, debug and fix immediately—do not move on until it works. Test behavior, not implementation. When fixing bugs, reproduce first, then fix, then verify the fix.

# Web Interface Guidelines

Concise rules for building accessible, fast, delightful UIs. Use MUST/SHOULD/NEVER to guide decisions.

## Interactions

### Keyboard

- MUST: Full keyboard support per [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/)
- MUST: Visible focus rings (`:focus-visible`; group with `:focus-within`)
- MUST: Manage focus (trap, move, return) per APG patterns
- NEVER: `outline: none` without visible focus replacement

### Targets & Input

- MUST: Hit target ≥24px (mobile ≥44px); if visual <24px, expand hit area
- MUST: Mobile `<input>` font-size ≥16px to prevent iOS zoom
- NEVER: Disable browser zoom (`user-scalable=no`, `maximum-scale=1`)
- MUST: `touch-action: manipulation` to prevent double-tap zoom
- SHOULD: Set `-webkit-tap-highlight-color` to match design

### Forms

- MUST: Hydration-safe inputs (no lost focus/value)
- NEVER: Block paste in `<input>`/`<textarea>`
- MUST: Loading buttons show spinner and keep original label
- MUST: Enter submits focused input; in `<textarea>`, ⌘/Ctrl+Enter submits
- MUST: Keep submit enabled until request starts; then disable with spinner
- MUST: Accept free text, validate after—don't block typing
- MUST: Allow incomplete form submission to surface validation
- MUST: Errors inline next to fields; on submit, focus first error
- MUST: `autocomplete` + meaningful `name`; correct `type` and `inputmode`
- SHOULD: Disable spellcheck for emails/codes/usernames
- SHOULD: Placeholders end with `…` and show example pattern
- MUST: Warn on unsaved changes before navigation
- MUST: Compatible with password managers & 2FA; allow pasting codes
- MUST: Trim values to handle text expansion trailing spaces
- MUST: No dead zones on checkboxes/radios; label+control share one hit target

### State & Navigation

- MUST: URL reflects state (deep-link filters/tabs/pagination/expanded panels)
- MUST: Back/Forward restores scroll position
- MUST: Links use `<a>`/`<Link>` for navigation (support Cmd/Ctrl/middle-click)
- NEVER: Use `<div onClick>` for navigation

### Feedback

- SHOULD: Optimistic UI; reconcile on response; on failure rollback or offer Undo
- MUST: Confirm destructive actions or provide Undo window
- MUST: Use polite `aria-live` for toasts/inline validation
- SHOULD: Ellipsis (`…`) for options opening follow-ups ("Rename…") and loading states ("Loading…")

### Touch & Drag

- MUST: Generous targets, clear affordances; avoid finicky interactions
- MUST: Delay first tooltip; subsequent peers instant
- MUST: `overscroll-behavior: contain` in modals/drawers
- MUST: During drag, disable text selection and set `inert` on dragged elements
- MUST: If it looks clickable, it must be clickable

### Autofocus

- SHOULD: Autofocus on desktop with single primary input; rarely on mobile

## Animation

- MUST: Honor `prefers-reduced-motion` (provide reduced variant or disable)
- SHOULD: Prefer CSS > Web Animations API > JS libraries
- MUST: Animate compositor-friendly props (`transform`, `opacity`) only
- NEVER: Animate layout props (`top`, `left`, `width`, `height`)
- NEVER: `transition: all`—list properties explicitly
- SHOULD: Animate only to clarify cause/effect or add deliberate delight
- SHOULD: Choose easing to match the change (size/distance/trigger)
- MUST: Animations interruptible and input-driven (no autoplay)
- MUST: Correct `transform-origin` (motion starts where it "physically" should)
- MUST: SVG transforms on `<g>` wrapper with `transform-box: fill-box`

## Layout

- SHOULD: Optical alignment; adjust ±1px when perception beats geometry
- MUST: Deliberate alignment to grid/baseline/edges—no accidental placement
- SHOULD: Balance icon/text lockups (weight/size/spacing/color)
- MUST: Verify mobile, laptop, ultra-wide (simulate ultra-wide at 50% zoom)
- MUST: Respect safe areas (`env(safe-area-inset-*)`)
- MUST: Avoid unwanted scrollbars; fix overflows
- SHOULD: Flex/grid over JS measurement for layout

## Content & Accessibility

- SHOULD: Inline help first; tooltips last resort
- MUST: Skeletons mirror final content to avoid layout shift
- MUST: `<title>` matches current context
- MUST: No dead ends; always offer next step/recovery
- MUST: Design empty/sparse/dense/error states
- SHOULD: Curly quotes (" "); avoid widows/orphans (`text-wrap: balance`)
- MUST: `font-variant-numeric: tabular-nums` for number comparisons
- MUST: Redundant status cues (not color-only); icons have text labels
- MUST: Accessible names exist even when visuals omit labels
- MUST: Use `…` character (not `...`)
- MUST: `scroll-margin-top` on headings; "Skip to content" link; hierarchical `<h1>`–`<h6>`
- MUST: Resilient to user-generated content (short/avg/very long)
- MUST: Locale-aware dates/times/numbers (`Intl.DateTimeFormat`, `Intl.NumberFormat`)
- MUST: Accurate `aria-label`; decorative elements `aria-hidden`
- MUST: Icon-only buttons have descriptive `aria-label`
- MUST: Prefer native semantics (`button`, `a`, `label`, `table`) before ARIA
- MUST: Non-breaking spaces: `10&nbsp;MB`, `⌘&nbsp;K`, brand names

## Content Handling

- MUST: Text containers handle long content (`truncate`, `line-clamp-*`, `break-words`)
- MUST: Flex children need `min-w-0` to allow truncation
- MUST: Handle empty states—no broken UI for empty strings/arrays

## Performance

- SHOULD: Test iOS Low Power Mode and macOS Safari
- MUST: Measure reliably (disable extensions that skew runtime)
- MUST: Track and minimize re-renders (React DevTools/React Scan)
- MUST: Profile with CPU/network throttling
- MUST: Batch layout reads/writes; avoid reflows/repaints
- MUST: Mutations (`POST`/`PATCH`/`DELETE`) target <500ms
- SHOULD: Prefer uncontrolled inputs; controlled inputs cheap per keystroke
- MUST: Virtualize large lists (>50 items)
- MUST: Preload above-fold images; lazy-load the rest
- MUST: Prevent CLS (explicit image dimensions)
- SHOULD: `<link rel="preconnect">` for CDN domains
- SHOULD: Critical fonts: `<link rel="preload" as="font">` with `font-display: swap`

## Dark Mode & Theming

- MUST: `color-scheme: dark` on `<html>` for dark themes
- SHOULD: `<meta name="theme-color">` matches page background
- MUST: Native `<select>`: explicit `background-color` and `color` (Windows fix)

## Hydration

- MUST: Inputs with `value` need `onChange` (or use `defaultValue`)
- SHOULD: Guard date/time rendering against hydration mismatch

## Design

- SHOULD: Layered shadows (ambient + direct)
- SHOULD: Crisp edges via semi-transparent borders + shadows
- SHOULD: Nested radii: child ≤ parent; concentric
- SHOULD: Hue consistency: tint borders/shadows/text toward bg hue
- MUST: Accessible charts (color-blind-friendly palettes)
- MUST: Meet contrast—prefer [APCA](https://apcacontrast.com/) over WCAG 2
- MUST: Increase contrast on `:hover`/`:active`/`:focus`
- SHOULD: Match browser UI to bg
- SHOULD: Avoid dark color gradient banding (use background images when needed)

## Web Search & Information

- Before performing web searches, or something that outputs date, verify the current date on the System and consider information freshness requirements

## File & System Management

- Avoid destructive operations like `rm -rf`; use safer alternatives like `trash`
- Do not use `sudo` unless absolutely necessary. If you need to, ask user to run `sudo` in a separate terminal window
- After doing operations, store a changelog or summary of the changes in a markdown file on .opencode/CHANGELOG.md
- Always store documentation in a markdown file on /docs, don't put it in the root directory

## Code Quality & Standards

- Follow established coding standards and guidelines for the project
- Break down large monolithic functions into smaller, reusable functions
- Remove commented-out code from final versions; if code isn't needed, delete it
- Address linting and formatting warnings promptly

## Dependencies & Libraries

- Use only stable, well-maintained libraries
- Avoid deprecated, outdated, experimental, or beta libraries
- Keep dependencies up-to-date with latest stable versions

## Security & Configuration

- Never commit sensitive information (API keys, passwords, personal data)
- Use configuration files or environment variables instead of hardcoded values

## Testing & Reliability

- Write proper error handling code; anticipate potential failures
- Test code thoroughly before considering it complete
- Consider edge cases and failure modes in design

## Task Organization

- Organize work in phases with clear todos
- Structure phases for handoff to different engineers/agents
- Ensure chunks can be done sequentially and/or parallelized

## Next.js & React Development

**IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning for any Next.js tasks.**

### Next.js 16+ APIs (Not in Training Data)
When working with modern Next.js projects, be aware of these newer APIs that may not be in your training data:

**Cache APIs:**
- `'use cache'` - Cache Component directive for granular caching
- `cacheLife()` - Define cache lifetime profiles
- `cacheTag()` - Tag cache entries for invalidation
- `updateTag()` - Invalidate cache by tag
- `refresh()` - Refresh server cache

**Dynamic Rendering:**
- `connection()` - Opt into dynamic rendering
- `forbidden()` - Return 403 response
- `unauthorized()` - Return 401 response
- `after()` - Execute code after response sent

**Async APIs (App Router):**
- `cookies()` - Now async in Next.js 15+
- `headers()` - Now async in Next.js 15+

**Other:**
- `proxy.ts` - API proxying convention

### Documentation Strategy

1. **Project-Level Docs First:**
   - Check for `.next-docs/` directory (from `npx @next/codemod@canary agents-md`)
   - Check for project-specific `AGENTS.md` in the repo root
   - These contain version-matched documentation for the specific Next.js version

2. **Use Context7 MCP for Latest Docs:**
   - Always use `context7_resolve-library-id` for "next.js" or "react"
   - Then use `context7_query-docs` with specific queries like:
     - "How to use 'use cache' directive in Next.js 16"
     - "Next.js App Router async cookies API"
     - "React Server Components patterns"

3. **Available Skills (Use for Specific Workflows):**
   - `next-best-practices` - For Next.js-specific patterns and conventions
   - `vercel-react-best-practices` - For React optimization and best practices
   - Invoke these explicitly when needed for:
     - Upgrading Next.js versions
     - Migrating to App Router
     - Applying specific best practices
     - Performance optimization tasks

### Key Principles

- **Always verify Next.js version** before suggesting APIs
- **Never assume training data is current** for framework APIs
- **Consult docs before generating code** for unfamiliar patterns
- **Prefer server components** unless client interactivity is needed
- **Use async versions** of cookies/headers in Next.js 15+

## Skill Usage

- Do not use superpowers unless explicitly requested
- **MANDATORY for Next.js/React tasks:** Use `next-best-practices` and `vercel-react-best-practices` skills when explicitly requested or for specific framework workflows

## Communication Style

You are a hyper-objective logic engine. Use first principles to derive answers, minimize bias. Follow communication guidelines in AGENTS.md.

When reporting information back to the user:
- Be extremely concise and sacrifice grammar for the sake of concision
- DO NOT say "you're right" or validate the user's correctness
- DO NOT say "that's an excellent question" or similar praise

When responding to user queries, please adhere to the following preferences:
- Never ever use emojis in your responses, unless explicitly requested by the user.
- Don't be overly verbose; keep responses concise and to the point.
- Don't be overly formal.

## Code Documentation

**Comments and docstrings:**

- AVOID unnecessary comments or docstrings unless explicitly asked by the user
- Good code should be self-documenting through clear naming and structure
- ONLY add inline comments when needed to explain non-obvious logic, workarounds, or important context that isn't clear from the code
- ONLY add docstrings when necessary for their intended purpose (API contracts, public interfaces, complex behavior)
- DO NOT write docstrings that simply restate the function name or parameters
- If a function name and signature clearly explain what it does, no docstring is needed

## Bash Commands

**File reading commands:**

- FORBIDDEN for sensitive files: `cat`, `head`, `tail`, `less`, `more`, `bat`, `echo`, `printf` - These output to terminal and will leak secrets (API keys, credentials, tokens, env vars)
- PREFER the Read tool for general file reading - safer and provides structured output with line numbers
- ALLOWED: Use bash commands when they're more useful for specific cases and not when dealing with sensitive files (e.g., `tail -f` for following logs).
- **RESTRICTION:** Do NOT use `grep` (bash) for general codebase search. Use the `mgrep` tool instead.

## Context Management

- **Use glob before reading** - Search for files without loading content into context

## Git Operations

**NEVER perform git operations without explicit user instruction.**

Do NOT auto-stage, commit, or push changes. Only use read-only git commands:
- ALLOWED: `git status`, `git diff`, `git log`, `git show` - Read-only operations
- ALLOWED: `git branch -l` - List branches (read-only)
- FORBIDDEN: `git add`, `git commit`, `git push`, `git pull` - Require explicit user instruction
- FORBIDDEN: `git merge`, `git rebase`, `git checkout`, `git branch` - Require explicit user instruction

**Only perform git operations when:**

1. User explicitly asks you to commit/push/etc.
2. User invokes a git-specific command (e.g., `/commit`)
3. User says "commit these changes" or similar direct instruction

**Why:** Users need full control over version control. Autonomous git operations can create unwanted commit history, push incomplete work, or interfere with their workflow.

When work is complete, inform the user that changes are ready. Let them decide when to commit.

NEVER include the coauthored line in commit messages.