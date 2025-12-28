import { tool } from "@opencode-ai/plugin/tool";
import path from "node:path";
import fs from "node:fs/promises";

/* ===================== helpers ===================== */

function norm(p) {
  return p.replace(/\\/g, "/").trim();
}

function mustEnable() {
  if (process.env.OPENCODE_UNSAFE_FILES !== "1") {
    throw new Error(
      "Unsafe FS tools disabled. Set OPENCODE_UNSAFE_FILES=1 and restart OpenCode.",
    );
  }
}

function baseDirFrom(ctx) {
  return ctx?.worktree || ctx?.directory || process.cwd();
}

function resolvePath(inputPath, baseDir) {
  const p = norm(inputPath);
  return path.isAbsolute(p) ? p : path.resolve(baseDir, p);
}

function assertInBase(absPath, baseDir) {
  if (process.env.OPENCODE_UNSAFE_ALLOW_OUTSIDE === "1") return absPath;

  const rel = path.relative(baseDir, absPath);
  if (rel.startsWith("..") || path.isAbsolute(rel)) {
    throw new Error(`Path outside worktree blocked: ${absPath}`);
  }
  return absPath;
}

function assertNotGitDir(absPath) {
  if (process.env.OPENCODE_UNSAFE_INCLUDE_GIT === "1") return;

  const parts = norm(absPath).split("/");
  if (parts.includes(".git")) {
    throw new Error("Access to .git is blocked by default.");
  }
}

async function safeStat(absPath) {
  const st = await fs.lstat(absPath);
  return {
    isFile: st.isFile(),
    isDir: st.isDirectory(),
    isSymlink: st.isSymbolicLink(),
    size: st.size,
    mtimeMs: st.mtimeMs,
  };
}

/* ===================== plugin ===================== */

export default async function UnsafeFsPlugin(ctx) {
  return {
    tool: {
      fs_read: tool({
        description:
          "Read any file (including gitignored & hidden). DANGEROUS.",
        args: {
          path: tool.schema.string(),
          maxBytes: tool.schema.number().optional(),
        },
        async execute({ path: p, maxBytes }, tctx) {
          mustEnable();
          const base = baseDirFrom(tctx);
          const abs = assertInBase(resolvePath(p, base), base);
          assertNotGitDir(abs);

          const limit = typeof maxBytes === "number" ? maxBytes : 200_000;
          const buf = await fs.readFile(abs);
          if (buf.byteLength > limit) {
            return `File too large (${buf.byteLength} bytes).`;
          }
          return buf.toString("utf8");
        },
      }),

      fs_write: tool({
        description: "Create or overwrite file (ignored allowed).",
        args: {
          path: tool.schema.string(),
          content: tool.schema.string(),
        },
        async execute({ path: p, content }, tctx) {
          mustEnable();
          const base = baseDirFrom(tctx);
          const abs = assertInBase(resolvePath(p, base), base);
          assertNotGitDir(abs);

          await fs.mkdir(path.dirname(abs), { recursive: true });
          await fs.writeFile(abs, content.replace(/\r\n/g, "\n"), "utf8");
          return "ok";
        },
      }),

      fs_append: tool({
        description: "Append to file.",
        args: {
          path: tool.schema.string(),
          content: tool.schema.string(),
        },
        async execute({ path: p, content }, tctx) {
          mustEnable();
          const base = baseDirFrom(tctx);
          const abs = assertInBase(resolvePath(p, base), base);
          assertNotGitDir(abs);

          await fs.appendFile(abs, content.replace(/\r\n/g, "\n"), "utf8");
          return "ok";
        },
      }),

      fs_delete: tool({
        description: "Delete file or directory.",
        args: {
          path: tool.schema.string(),
          recursive: tool.schema.boolean().optional(),
        },
        async execute({ path: p, recursive }, tctx) {
          mustEnable();
          const base = baseDirFrom(tctx);
          const abs = assertInBase(resolvePath(p, base), base);
          assertNotGitDir(abs);

          await fs.rm(abs, {
            recursive: recursive !== false,
            force: true,
          });
          return "ok";
        },
      }),

      fs_list_raw: tool({
        description:
          "List directory including hidden & ignored files. Returns formatted text list.",
        args: {
          path: tool.schema.string().optional(),
          maxItems: tool.schema.number().optional(),
        },
        async execute({ path: p, maxItems }, tctx) {
          mustEnable();
          const base = baseDirFrom(tctx);
          const abs = assertInBase(resolvePath(p || ".", base), base);
          assertNotGitDir(abs);

          const limit = typeof maxItems === "number" ? maxItems : 500;
          const entries = await fs.readdir(abs, { withFileTypes: true });

          // Format as text list instead of returning objects
          const items = entries.slice(0, limit).map((e) => {
            const type = e.isDirectory()
              ? "[DIR]"
              : e.isFile()
                ? "[FILE]"
                : "[OTHER]";
            return `${type} ${e.name}`;
          });

          return `📁 Directory: ${abs}\n\nTotal: ${entries.length} items (showing ${items.length})\n\n${items.join("\n")}`;
        },
      }),

      fs_stat: tool({
        description: "Get file metadata. Returns formatted text.",
        args: { path: tool.schema.string() },
        async execute({ path: p }, tctx) {
          mustEnable();
          const base = baseDirFrom(tctx);
          const abs = assertInBase(resolvePath(p, base), base);
          assertNotGitDir(abs);

          const st = await safeStat(abs);

          // Format as text instead of returning object
          return `📄 File: ${abs}

Type: ${st.isFile ? "File" : st.isDir ? "Directory" : st.isSymlink ? "Symlink" : "Other"}
Size: ${st.size} bytes
Modified: ${new Date(st.mtimeMs).toISOString()}`;
        },
      }),
    },
  };
}
