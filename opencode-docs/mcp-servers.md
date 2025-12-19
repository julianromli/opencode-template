[Skip to content](https://opencode.ai/docs/mcp-servers#_top)

[![](https://opencode.ai/docs/_astro/logo-dark.DOStV66V.svg)![](https://opencode.ai/docs/_astro/logo-light.B0yzR0O5.svg) OpenCode](https://opencode.ai/)

[Home](https://opencode.ai/) [Docs](https://opencode.ai/docs/)

Search ` CtrlK `

Cancel

Clear

- [Intro](https://opencode.ai/docs/)
- [Config](https://opencode.ai/docs/config/)
- [Providers](https://opencode.ai/docs/providers/)
- [Network](https://opencode.ai/docs/network/)
- [Enterprise](https://opencode.ai/docs/enterprise/)
- [Troubleshooting](https://opencode.ai/docs/troubleshooting/)
- [Migrating to 1.0](https://opencode.ai/docs/1-0/)
- Usage



- [TUI](https://opencode.ai/docs/tui/)
- [CLI](https://opencode.ai/docs/cli/)
- [IDE](https://opencode.ai/docs/ide/)
- [Zen](https://opencode.ai/docs/zen/)
- [Share](https://opencode.ai/docs/share/)
- [GitHub](https://opencode.ai/docs/github/)
- [GitLab](https://opencode.ai/docs/gitlab/)

- Configure



- [Tools](https://opencode.ai/docs/tools/)
- [Rules](https://opencode.ai/docs/rules/)
- [Agents](https://opencode.ai/docs/agents/)
- [Models](https://opencode.ai/docs/models/)
- [Themes](https://opencode.ai/docs/themes/)
- [Keybinds](https://opencode.ai/docs/keybinds/)
- [Commands](https://opencode.ai/docs/commands/)
- [Formatters](https://opencode.ai/docs/formatters/)
- [Permissions](https://opencode.ai/docs/permissions/)
- [LSP Servers](https://opencode.ai/docs/lsp/)
- [MCP servers](https://opencode.ai/docs/mcp-servers/)
- [ACP Support](https://opencode.ai/docs/acp/)
- [Custom Tools](https://opencode.ai/docs/custom-tools/)

- Develop



- [SDK](https://opencode.ai/docs/sdk/)
- [Server](https://opencode.ai/docs/server/)
- [Plugins](https://opencode.ai/docs/plugins/)
- [Ecosystem](https://opencode.ai/docs/ecosystem/)

[GitHub](https://github.com/sst/opencode) [Dscord](https://opencode.ai/discord)

Select themeDarkLightAuto

On this page

Overview

- [Overview](https://opencode.ai/docs/mcp-servers#_top)
- [Caveats](https://opencode.ai/docs/mcp-servers#caveats)
- [Configure](https://opencode.ai/docs/mcp-servers#configure)
  - [Local](https://opencode.ai/docs/mcp-servers#local)
  - [Remote](https://opencode.ai/docs/mcp-servers#remote)
  - [OAuth](https://opencode.ai/docs/mcp-servers#oauth)
- [Manage](https://opencode.ai/docs/mcp-servers#manage)
  - [Global](https://opencode.ai/docs/mcp-servers#global)
  - [Per agent](https://opencode.ai/docs/mcp-servers#per-agent)
- [Examples](https://opencode.ai/docs/mcp-servers#examples)
  - [Context7](https://opencode.ai/docs/mcp-servers#context7)
  - [Grep by Vercel](https://opencode.ai/docs/mcp-servers#grep-by-vercel)

## On this page

- [Overview](https://opencode.ai/docs/mcp-servers#_top)
- [Caveats](https://opencode.ai/docs/mcp-servers#caveats)
- [Configure](https://opencode.ai/docs/mcp-servers#configure)
  - [Local](https://opencode.ai/docs/mcp-servers#local)
  - [Remote](https://opencode.ai/docs/mcp-servers#remote)
  - [OAuth](https://opencode.ai/docs/mcp-servers#oauth)
- [Manage](https://opencode.ai/docs/mcp-servers#manage)
  - [Global](https://opencode.ai/docs/mcp-servers#global)
  - [Per agent](https://opencode.ai/docs/mcp-servers#per-agent)
- [Examples](https://opencode.ai/docs/mcp-servers#examples)
  - [Context7](https://opencode.ai/docs/mcp-servers#context7)
  - [Grep by Vercel](https://opencode.ai/docs/mcp-servers#grep-by-vercel)

# MCP servers

Add local and remote MCP tools.

You can add external tools to OpenCode using the _Model Context Protocol_, or MCP.

OpenCode supports both:

- Local servers
- Remote servers

Once added, MCP tools are automatically available to the LLM alongside built-in tools.

* * *

## [Caveats](https://opencode.ai/docs/mcp-servers\#caveats)

When you use an MCP server, it adds to the context. This can quickly add up if
you have a lot of tools. So we recommend being careful with which MCP servers
you use.

Tip

MCP servers add to your context, so you want to be careful with which
ones you enable.

Certain MCP servers, like the GitHub MCP server tend to add a lot of tokens and
can easily exceed the context limit.

* * *

## [Configure](https://opencode.ai/docs/mcp-servers\#configure)

You can define MCP servers in your OpenCode config under `mcp`. Add each MCP
with a unique name. You can refer to that MCP by name when prompting the LLM.

opencode.jsonc

```
{

  "$schema": "https://opencode.ai/config.json",

  "mcp": {

    "name-of-mcp-server": {

      // ...

      "enabled": true,

    },

    "name-of-other-mcp-server": {

      // ...

    },

  },

}
```

You can also disable a server by setting `enabled` to `false`. This is useful if you want to temporarily disable a server without removing it from your config.

* * *

### [Local](https://opencode.ai/docs/mcp-servers\#local)

Add local MCP servers using `type` to `"local"` within the MCP object.

opencode.jsonc

```
{

  "$schema": "https://opencode.ai/config.json",

  "mcp": {

    "my-local-mcp-server": {

      "type": "local",

      // Or ["bun", "x", "my-mcp-command"]

      "command": ["npx", "-y", "my-mcp-command"],

      "enabled": true,

      "environment": {

        "MY_ENV_VAR": "my_env_var_value",

      },

    },

  },

}
```

The command is how the local MCP server is started. You can also pass in a list of environment variables as well.

For example, here’s how I can add the test
[`@modelcontextprotocol/server-everything`](https://www.npmjs.com/package/@modelcontextprotocol/server-everything) MCP server.

opencode.jsonc

```
{

  "$schema": "https://opencode.ai/config.json",

  "mcp": {

    "mcp_everything": {

      "type": "local",

      "command": ["npx", "-y", "@modelcontextprotocol/server-everything"],

    },

  },

}
```

And to use it I can add `use the mcp_everything tool` to my prompts.

```
use the mcp_everything tool to add the number 3 and 4
```

#### [Options](https://opencode.ai/docs/mcp-servers\#options)

Here are all the options for configuring a local MCP server.

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | String | Y | Type of MCP server connection, must be `"local"`. |
| `command` | Array | Y | Command and arguments to run the MCP server. |
| `environment` | Object |  | Environment variables to set when running the server. |
| `enabled` | Boolean |  | Enable or disable the MCP server on startup. |
| `timeout` | Number |  | Timeout in ms for fetching tools from the MCP server. Defaults to 5000 (5 seconds). |

* * *

### [Remote](https://opencode.ai/docs/mcp-servers\#remote)

Add remote MCP servers under by setting `type` to `"remote"`.

opencode.json

```
{

  "$schema": "https://opencode.ai/config.json",

  "mcp": {

    "my-remote-mcp": {

      "type": "remote",

      "url": "https://my-mcp-server.com",

      "enabled": true,

      "headers": {

        "Authorization": "Bearer MY_API_KEY"

      }

    }

  }

}
```

Here the `url` is the URL of the remote MCP server and with the `headers` option you can pass in a list of headers.

#### [Options](https://opencode.ai/docs/mcp-servers\#options-1)

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | String | Y | Type of MCP server connection, must be `"remote"`. |
| `url` | String | Y | URL of the remote MCP server. |
| `enabled` | Boolean |  | Enable or disable the MCP server on startup. |
| `headers` | Object |  | Headers to send with the request. |
| `oauth` | Object |  | OAuth authentication configuration. See [OAuth](https://opencode.ai/docs/mcp-servers#oauth) section below. |
| `timeout` | Number |  | Timeout in ms for fetching tools from the MCP server. Defaults to 5000 (5 seconds). |

* * *

### [OAuth](https://opencode.ai/docs/mcp-servers\#oauth)

OpenCode automatically handles OAuth authentication for remote MCP servers. When a server requires authentication, OpenCode will:

1. Detect the 401 response and initiate the OAuth flow
2. Use **Dynamic Client Registration (RFC 7591)** if supported by the server
3. Store tokens securely for future requests

#### [Automatic OAuth](https://opencode.ai/docs/mcp-servers\#automatic-oauth)

For most OAuth-enabled MCP servers, no special configuration is needed. Just configure the remote server:

opencode.json

```
{

  "$schema": "https://opencode.ai/config.json",

  "mcp": {

    "my-oauth-server": {

      "type": "remote",

      "url": "https://mcp.example.com/mcp"

    }

  }

}
```

If the server requires authentication, OpenCode will prompt you to authenticate when you first try to use it.

#### [Pre-registered Client](https://opencode.ai/docs/mcp-servers\#pre-registered-client)

If you have client credentials from the MCP server provider, you can configure them:

opencode.json

```
{

  "$schema": "https://opencode.ai/config.json",

  "mcp": {

    "my-oauth-server": {

      "type": "remote",

      "url": "https://mcp.example.com/mcp",

      "oauth": {

        "clientId": "{env:MY_MCP_CLIENT_ID}",

        "clientSecret": "{env:MY_MCP_CLIENT_SECRET}",

        "scope": "tools:read tools:execute"

      }

    }

  }

}
```

#### [Disabling OAuth](https://opencode.ai/docs/mcp-servers\#disabling-oauth)

If you want to disable automatic OAuth for a server (e.g., for servers that use API keys instead), set `oauth` to `false`:

opencode.json

```
{

  "$schema": "https://opencode.ai/config.json",

  "mcp": {

    "my-api-key-server": {

      "type": "remote",

      "url": "https://mcp.example.com/mcp",

      "oauth": false,

      "headers": {

        "Authorization": "Bearer {env:MY_API_KEY}"

      }

    }

  }

}
```

#### [OAuth Options](https://opencode.ai/docs/mcp-servers\#oauth-options)

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `oauth` | Object \| false |  | OAuth config object, or `false` to disable OAuth auto-detection. |
| `clientId` | String |  | OAuth client ID. If not provided, dynamic client registration will be attempted. |
| `clientSecret` | String |  | OAuth client secret, if required by the authorization server. |
| `scope` | String |  | OAuth scopes to request during authorization. |

#### [Authenticating](https://opencode.ai/docs/mcp-servers\#authenticating)

You can manually trigger authentication or manage credentials:

Terminal window

```
# Authenticate with a specific MCP server

opencode mcp auth my-oauth-server

# List all MCP servers and their auth status

opencode mcp list

# Remove stored credentials

opencode mcp logout my-oauth-server
```

The `mcp auth` command will open your browser for authorization. After you authorize, OpenCode will store the tokens securely in `~/.local/share/opencode/mcp-auth.json`.

* * *

## [Manage](https://opencode.ai/docs/mcp-servers\#manage)

Your MCPs are available as tools in OpenCode, alongside built-in tools. So you
can manage them through the OpenCode config like any other tool.

* * *

### [Global](https://opencode.ai/docs/mcp-servers\#global)

This means that you can enable or disable them globally.

opencode.json

```
{

  "$schema": "https://opencode.ai/config.json",

  "mcp": {

    "my-mcp-foo": {

      "type": "local",

      "command": ["bun", "x", "my-mcp-command-foo"]

    },

    "my-mcp-bar": {

      "type": "local",

      "command": ["bun", "x", "my-mcp-command-bar"]

    }

  },

  "tools": {

    "my-mcp-foo": false

  }

}
```

We can also use a glob pattern to disable all matching MCPs.

opencode.json

```
{

  "$schema": "https://opencode.ai/config.json",

  "mcp": {

    "my-mcp-foo": {

      "type": "local",

      "command": ["bun", "x", "my-mcp-command-foo"]

    },

    "my-mcp-bar": {

      "type": "local",

      "command": ["bun", "x", "my-mcp-command-bar"]

    }

  },

  "tools": {

    "my-mcp*": false

  }

}
```

Here we are using the glob pattern `my-mcp*` to disable all MCPs.

* * *

### [Per agent](https://opencode.ai/docs/mcp-servers\#per-agent)

If you have a large number of MCP servers you may want to only enable them per
agent and disable them globally. To do this:

1. Disable it as a tool globally.
2. In your [agent config](https://opencode.ai/docs/agents#tools) enable the MCP server as a tool.

opencode.json

```
{

  "$schema": "https://opencode.ai/config.json",

  "mcp": {

    "my-mcp": {

      "type": "local",

      "command": ["bun", "x", "my-mcp-command"],

      "enabled": true

    }

  },

  "tools": {

    "my-mcp*": false

  },

  "agent": {

    "my-agent": {

      "tools": {

        "my-mcp*": true

      }

    }

  }

}
```

* * *

#### [Glob patterns](https://opencode.ai/docs/mcp-servers\#glob-patterns)

The glob pattern uses simple regex globbing patterns.

- `*` matches zero or more of any character
- `?` matches exactly one character
- All other characters match literally

* * *

## [Examples](https://opencode.ai/docs/mcp-servers\#examples)

Below are examples of some common MCP servers. You can submit a PR if you want to document other servers.

* * *

### [Context7](https://opencode.ai/docs/mcp-servers\#context7)

Add the [Context7 MCP server](https://github.com/upstash/context7) to search through docs.

opencode.json

```
{

  "$schema": "https://opencode.ai/config.json",

  "mcp": {

    "context7": {

      "type": "remote",

      "url": "https://mcp.context7.com/mcp"

    }

  }

}
```

If you have signed up for a free account, you can use your API key and get higher rate-limits.

opencode.json

```
{

  "$schema": "https://opencode.ai/config.json",

  "mcp": {

    "context7": {

      "type": "remote",

      "url": "https://mcp.context7.com/mcp",

      "headers": {

        "CONTEXT7_API_KEY": "{env:CONTEXT7_API_KEY}"

      }

    }

  }

}
```

Here we are assuming that you have the `CONTEXT7_API_KEY` environment variable set.

Add `use context7` to your prompts to use Context7 MCP server.

```
Configure a Cloudflare Worker script to cache JSON API responses for five minutes. use context7
```

Alternatively, you can add something like this to your
[AGENTS.md](https://opencode.ai/docs/rules/).

AGENTS.md

```
When you need to search docs, use `context7` tools.
```

* * *

### [Grep by Vercel](https://opencode.ai/docs/mcp-servers\#grep-by-vercel)

Add the [Grep by Vercel](https://grep.app/) MCP server to search through code snippets on GitHub.

opencode.json

```
{

  "$schema": "https://opencode.ai/config.json",

  "mcp": {

    "gh_grep": {

      "type": "remote",

      "url": "https://mcp.grep.app"

    }

  }

}
```

Since we named our MCP server `gh_grep`, you can add `use the gh_grep tool` to your prompts to get the agent to use it.

```
What's the right way to set a custom domain in an SST Astro component? use the gh_grep tool
```

Alternatively, you can add something like this to your
[AGENTS.md](https://opencode.ai/docs/rules/).

AGENTS.md

```
If you are unsure how to do something, use `gh_grep` to search code examples from github.
```

[Edit this page](https://github.com/sst/opencode/edit/dev/packages/web/src/content/docs/mcp-servers.mdx) [Find a bug? Open an issue](https://github.com/sst/opencode/issues/new) [Join our Discord community](https://opencode.ai/discord)

© [Anomaly](https://anoma.ly/)

Dec 17, 2025