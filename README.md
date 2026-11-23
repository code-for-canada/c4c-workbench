# C4C Workbench

Code for Canada's plugin of skills and tools for AI agents. One repo works in Claude (Desktop, Cowork, claude.ai, Claude Code), OpenAI (Codex, ChatGPT), GitHub Copilot (VS Code, Copilot CLI, Copilot app) and Cursor.

It follows the [Agent Plugins 1.0](https://agent-plugins.org/specification) open standard, plus the Claude manifest, because Claude does not read the Agent Plugins format.

## What works where

| Component | Claude | Codex / ChatGPT | Copilot / VS Code | Cursor |
|---|---|---|---|---|
| Skills (`skills/`) | ✅ | ✅ | ✅ | ✅ |
| MCP servers | `.mcp.json` | `mcp.json` | `mcp.json` | `mcp.json` |
| Subagents | `agents/` (not in claude.ai chat) | — (convert to a skill) | `com.github.copilot/agents/` | — |

Skills are the portable part, so put as much as you can in them.

## Adding things

**A skill.** Create `skills/<skill-name>/SKILL.md`. The folder name must match `name` in the frontmatter.

```md
---
name: my-skill
description: What it does and when the agent should use it.
---

Instructions for the agent.
```

**An MCP server.** Add it to both files. The Agent Plugins `mcp.json` needs a `type` (`stdio`, `streamable-http` or `sse`). Claude's `.mcp.json` uses `http` instead of `streamable-http`, and `${CLAUDE_PLUGIN_ROOT}` instead of `${PLUGIN_ROOT}`.

```jsonc
// mcp.json
"docs": { "type": "streamable-http", "url": "https://example.com/mcp" }
// .mcp.json
"docs": { "type": "http", "url": "https://example.com/mcp" }
```

**A subagent.** Add `agents/<name>.md` for Claude and `com.github.copilot/agents/<name>.agent.md` for Copilot.

**A release.** Bump `version` in `plugin.json`, `.claude-plugin/plugin.json` and `.claude-plugin/marketplace.json`, then check that the manifests agree:

```bash
node scripts/validate.mjs
```

## Installing from GitHub

These commands assume the repo is published at `code-for-canada/c4c-workbench`.

**Claude Desktop / Cowork / claude.ai.** Add the GitHub repo as a marketplace on the Plugins page (**Customize > Plugins**). Team and Enterprise owners can make it available to the whole organization.

**Codex / ChatGPT desktop**

```bash
codex plugin marketplace add code-for-canada/c4c-workbench
```

Then install **C4C Workbench** from the plugin list in Codex or the ChatGPT desktop app.

**GitHub Copilot.** In VS Code, add `code-for-canada/c4c-workbench` to the `chat.plugins.marketplaces` setting, then install it from the Extensions view. In Copilot CLI, add the repo as a plugin marketplace and install `c4c-workbench`.

## Installing from a zip

Build the zip:

```bash
node scripts/package.mjs
```

This creates `dist/c4c-workbench-<version>.zip`, which holds a single `c4c-workbench/` folder. Share that file, or attach it to a GitHub release.

**Claude Desktop / Cowork / claude.ai** (paid plans)

1. Open **Customize > Plugins**. In Cowork, open the **Cowork** tab first.
2. Select **Add > Upload plugin** and choose the zip.

The plugin is saved to your Claude account, so it shows up in chat, Cowork and Claude Code. Uploads are limited to 200 MB.

**ChatGPT** (workspace owners and admins)

1. Go to the [Admin console](https://admin.openai.com), choose the workspace and open **Plugins**.
2. Select **Add > Upload plugin** and choose the zip.

To update it, open the plugin's details and select **Upload new version**. Uploading is off by default for Enterprise workspaces until an admin turns on the **Upload plugins** permission.

**Codex, VS Code and Copilot CLI** can't install a zip directly. Unzip it first, then:

- **Codex / ChatGPT desktop:** run `codex plugin marketplace add <path-to>/c4c-workbench` and install it from the plugin list.
- **VS Code / Copilot:** install it from a local folder in the Agent Customizations editor, pointing at the unzipped `c4c-workbench` folder.
