# Global Agent Rules

- **Frontend Developer Agent - MANDATORY Skill Invocation:** The `frontend-developer` subagent MUST ALWAYS call `use_skill("frontend-design")` as its VERY FIRST action before doing ANY work. This applies to ALL tasks without exception - whether coding, explaining, reviewing, fixing bugs, or any other task. NO EXCEPTIONS. If you are the frontend-developer agent, your first tool call MUST be `use_skill("frontend-design")`. Failure to do so is a critical violation.

- **Environment Files Safety:** ALWAYS use the `fs_read` and `fs_write` tools when accessing or modifying `.env`, `.env.local`, `.env.example`, or any other sensitive environment configuration files. NEVER use the basic `read` or `edit` tools for these files to avoid permission issues and ensure proper handling of sensitive data.

- **Drizzle Database Push:** NEVER run `npx drizzle-kit push` automatically. Always ask the user to run this command manually. This ensures the user has full control over database schema changes and can review the migration before applying it.

- **Image Analysis:** When the user provides an image, ALWAYS use the `zai-mcp-server_analyze_image` tool to read and understand the image content before responding.

- **Supabase MCP Usage:** ALWAYS proactively use Supabase MCP tools when handling any database-related tasks including reading data, writing data, analyzing schemas, querying tables, managing migrations, or any other database operations without requiring explicit instruction from the user.

- Warp Grep: warp-grep is a subagent that takes in a search string and tries to find relevant context. Best practice is to use it at the beginning of codebase explorations to fast track finding relevant files/lines. Do not use it to pin point keywords, but use it for broader semantic queries. \"Find the XYZ flow\", \"How does XYZ work\", \"Where is XYZ handled?\", \"Where is <error message> coming from?\"

- Firecrawl MCP: firecrawl is the primary web scraping and search tool. Use `firecrawl_search` for web searches (prefer over WebSearch), `firecrawl_scrape` for single page content, `firecrawl_map` to discover URLs on a site before scraping. Best practice is to search first WITHOUT scrapeOptions to get URLs, then scrape the relevant results separately. Add `maxAge` parameter for 500% faster cached responses. Use search operators like `site:example .com`, `"exact phrase"`, `-exclude`.

- Context7 MCP: context7 provides up-to-date library documentation. Always call `resolve-library-id` first to get the library ID (e.g., "/prisma/prisma"), then call `query-docs` with that ID. Be specific in queries—"How to set up JWT auth in Express" not just "auth". Do not call more than 3 times per question; use best result if not found after 3 attempts.

- Verify & Iterate: After any implementation, setup, or code change, always verify it works by running the app, tests, or build. If it fails, errors, or exits unexpectedly, debug and fix immediately—do not move on until it works. Test behavior, not implementation. When fixing bugs, reproduce first, then fix, then verify the fix.