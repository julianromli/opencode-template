# Global Agent Rules

- **Environment Files Safety:** ALWAYS use the `fs_read` and `fs_write` tools when accessing or modifying `.env`, `.env.local`, `.env.example`, or any other sensitive environment configuration files. NEVER use the basic `read` or `edit` tools for these files to avoid permission issues and ensure proper handling of sensitive data.
