<p align="center">
  <img src="assets/workbench.png" alt="A workbench with tools on a pegboard, a prototype on the bench, and a checklist" width="280">
</p>

<h1 align="center">C4C Workbench</h1>

<p align="center">
  Code for Canada's skills for running technology projects with AI agents.<br>
  Works in Claude, ChatGPT, Codex, GitHub Copilot and Cursor.
</p>

<p align="center">
  <a href="#install">Install</a> ·
  <a href="#skills">Skills</a> ·
  <a href="#contributing">Contributing</a>
</p>

---

Most technology projects fail for predictable reasons: jumping to solutions, missing constraints, or not solving a real problem for real people. The workbench walks you through each phase with an AI agent that asks the right questions, produces the artifacts, and keeps a single report up to date as you learn.

## Skills

Start with **`workbench-guide`**. It tells you where you are, what to do next, and when you're ready to move on. The other skills are grouped by phase and live in [`skills/`](skills/).

## Install

### From GitHub

| Tool | How |
|---|---|
| **Claude** (Desktop, Cowork, claude.ai) | **Customize → Plugins**, add `code-for-canada/c4c-workbench` as a marketplace, then install **C4C Workbench**. Team and Enterprise owners can make it available to everyone. |
| **Codex / ChatGPT desktop** | Run `codex plugin marketplace add code-for-canada/c4c-workbench`, then install **C4C Workbench** from the plugin list. |
| **VS Code / Copilot** | Add `code-for-canada/c4c-workbench` to the `chat.plugins.marketplaces` setting, then install it from the Extensions view. In Copilot CLI, add the repo as a plugin marketplace and install `c4c-workbench`. |

### From a zip

Build the zip with `node scripts/package.mjs`, or download it from a release. It creates `dist/c4c-workbench-<version>.zip`.

| Tool | How |
|---|---|
| **Claude** (paid plans) | **Customize → Plugins → Add → Upload plugin**. In Cowork, open the **Cowork** tab first. The plugin is saved to your account, so it also shows up in chat and Claude Code. |
| **ChatGPT** (workspace admins) | In the [Admin console](https://admin.openai.com), open **Plugins → Add → Upload plugin**. Enterprise admins need to turn on the **Upload plugins** permission first. |
| **Codex, VS Code, Copilot CLI** | Unzip it, then install from the folder: `codex plugin marketplace add <path>/c4c-workbench`, or the Agent Customizations editor in VS Code. |

## Contributing

The plugin follows the [Agent Plugins 1.0](https://agent-plugins.org/specification) standard, plus a Claude manifest, since Claude doesn't read that format yet.

| Component | Claude | Codex / ChatGPT | Copilot / VS Code | Cursor |
|---|---|---|---|---|
| Skills (`skills/`) | ✅ | ✅ | ✅ | ✅ |
| MCP servers | `.mcp.json` | `mcp.json` | `mcp.json` | `mcp.json` |
| Subagents | `agents/` | — | `com.github.copilot/agents/` | — |

Skills are the portable part, so put as much as you can in them.

<details>
<summary><strong>Adding a skill</strong></summary>

Create `skills/<phase>-<skill-name>/SKILL.md`. The folder name must match `name` in the frontmatter. Put supporting material, including the skill's lesson, in `references/`.

```md
---
name: discovery-my-skill
description: What it does and when the agent should use it.
---

Instructions for the agent.
```

</details>

<details>
<summary><strong>Adding an MCP server</strong></summary>

Add it to both files. `mcp.json` needs a `type` (`stdio`, `streamable-http` or `sse`). Claude's `.mcp.json` uses `http` instead of `streamable-http`, and `${CLAUDE_PLUGIN_ROOT}` instead of `${PLUGIN_ROOT}`.

```jsonc
// mcp.json
"docs": { "type": "streamable-http", "url": "https://example.com/mcp" }
// .mcp.json
"docs": { "type": "http", "url": "https://example.com/mcp" }
```

</details>

<details>
<summary><strong>Adding a subagent</strong></summary>

Add `agents/<name>.md` for Claude and `com.github.copilot/agents/<name>.agent.md` for Copilot.

</details>

<details>
<summary><strong>Releasing</strong></summary>

Bump `version` in `plugin.json`, `.claude-plugin/plugin.json` and `.claude-plugin/marketplace.json`, then check that everything agrees:

```bash
node scripts/validate.mjs
```

</details>

## License

[MIT](LICENSE) © Code for Canada
