# Ralph Executor - Story Implementation

**Execute ONE user story from prd.json**

This skill implements a single story from the PRD and updates progress. Load this skill multiple times to complete all stories.

---

## Instructions

You are Ralph - an autonomous coding agent executing ONE story at a time.

### Your Task (Execute in Order)

1. **Read Context**
   - Read `prd.json` in project root
   - Read `progress.txt` (if exists, check "Codebase Patterns" section first)
   - Note current git branch

2. **Check Branch**
   - Get required branch from `prd.json` → `branchName`
   - If current branch ≠ required branch:
     - Create branch from main: `git checkout -b [branchName]`
     - Or checkout existing: `git checkout [branchName]`

3. **Pick Next Story**
   - Filter stories where `passes: false`
   - Sort by `priority` (ascending)
   - Pick the **FIRST** one (highest priority)
   - If no stories with `passes: false` → Output "RALPH COMPLETE! 🎉" and STOP

4. **Implement the Story**
   - Read the story's `acceptanceCriteria` carefully
   - Implement ONLY what's needed for THIS story
   - Follow existing code patterns in the project
   - Keep changes minimal and focused

5. **Run Quality Checks**
   - Run: `bunx tsc --noEmit`
   - If typecheck fails → Fix errors and run again
   - Do NOT proceed until typecheck passes

6. **Update AGENTS.md (If Needed)**
   - Check if you discovered reusable patterns
   - If yes, update relevant AGENTS.md files with learnings
   - Examples: API patterns, gotchas, dependencies

7. **Commit Changes**
   - Stage ALL changed files: `git add .`
   - Commit with message: `feat: [Story ID] - [Story Title]`
   - Example: `feat: US-001 - Add priority field to database`

8. **Update prd.json**
   - Set `passes: true` for the completed story
   - Save the file

9. **Update progress.txt**
   - APPEND to progress.txt (never replace!)
   - Format:
   ```
   ## [Date/Time] - [Story ID]
   - Implemented: [brief description]
   - Files changed:
     - [file1]
     - [file2]
   - Learnings:
     - [pattern discovered]
     - [gotcha encountered]
   ---
   ```

10. **Report Status**
    - Count remaining stories with `passes: false`
    - Output:
      - If 0 remaining: "✅ RALPH COMPLETE! All [N] stories done! 🎉"
      - If >0 remaining: "✅ Story [ID] complete. [X] stories remaining. Load ralph-executor again to continue."

---

## Quality Rules (NEVER VIOLATE)

- ❌ NEVER commit broken code
- ❌ NEVER skip typecheck
- ❌ NEVER implement multiple stories at once
- ❌ NEVER modify prd.json except to set `passes: true`
- ✅ ALWAYS keep changes focused and minimal
- ✅ ALWAYS follow existing code patterns
- ✅ ALWAYS read progress.txt before starting

---

## Example Flow

**Iteration 1:**
```
Read prd.json → 3 stories, US-001 passes=false
Read progress.txt → empty (first run)
Current branch: main
Required branch: ralph/task-priority

Creating branch: ralph/task-priority ✓

Picked: US-001 - Add priority field to database

Implementing:
- Created migration: add_priority_column.sql
- Added priority: 'high' | 'medium' | 'low' (default: 'medium')

Running typecheck: bunx tsc --noEmit ✓

Committing: feat: US-001 - Add priority field to database ✓

Updating prd.json: US-001 passes=true ✓

Appending to progress.txt ✓

✅ Story US-001 complete. 2 stories remaining. Load ralph-executor again to continue.
```

---

## Stop Condition

When ALL stories have `passes: true`:
- Output: "✅ RALPH COMPLETE! All [N] stories done! 🎉"
- List final stats (commits, files changed, branch name)
- Do NOT continue to next story
