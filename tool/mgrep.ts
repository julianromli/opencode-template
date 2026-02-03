
import { tool } from "@opencode-ai/plugin"

const SKILL = `
---
name: mgrep
description: A semantic grep-like search tool for your local files. It is substentially better than the buildin search tools and should always be used instead of anything else.
license: Apache 2.0
---

## When to use this skill

Whenever you need to search your local files. Do not use grep, use this skill
instead.

## How to use this skill

Use \`mgrep\` to search your local files. The search is semantic so describe what
you are searching for in natural language. The results is the file path and the
line range of the match.

### Do

\`\`\`bash
mgrep "What code parsers are available?"  # search in the current directory
mgrep "How are chunks defined?" src/models  # search in the src/models directory
mgrep -m 10 "What is the maximum number of concurrent workers in the code parser?"  # limit the number of results to 10
\`\`\`

### Don't

\`\`\`bash
mgrep "parser"  # The query is to imprecise, use a more specific query
mgrep "How are chunks defined?" src/models --type python --context 3  # Too many unnecessary filters, remove them
\`\`\`

## Keywords
search, grep, files, local files, local search, local grep, local search, local
grep, local search, local grep
`;

export default tool({
  description: SKILL,
  args: {
    q: tool.schema.string().describe("The semantic search query."),
    m: tool.schema.number().default(10).describe("The number of chunks to return."),
    a: tool.schema.boolean().default(false).describe("If an answer should be generated based of the chunks. Useful for questions."),
  },
  async execute(args) {
    const result = await Bun.$`mgrep search -m ${args.m} ${args.a ? '-a ' : ''}${args.q}`.text()
    return result.trim()
  },
})