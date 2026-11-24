<p align="center">
  <img src="assets/workbench.png" alt="A workbench with tools on a pegboard, a prototype on the bench, and a checklist" width="280">
</p>

<h1 align="center">C4C Workbench</h1>

<p align="center">
  Code for Canada's skills for running technology projects with AI agents.<br>
  Works in Claude, ChatGPT, Codex and GitHub Copilot.
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

Most tools install straight from this repo. Where a tool needs a zip instead, download it from a release or build it with `node scripts/package.mjs`. That creates `dist/c4c-workbench-<version>.zip`, plus `dist/c4c-workbench-m365-<version>.zip` for Microsoft 365.

### Claude

| Where | How |
|---|---|
| **Claude app** (desktop, Cowork, claude.ai) | **Customize → Plugins → Add → Add marketplace**, enter `code-for-canada/c4c-workbench`, then **Install** C4C Workbench. Or upload the zip with **Add → Upload plugin**. Plugins are saved to your account, so they also show up in Claude Code. |
| **Claude Code in VS Code** | Type `/plugins`, add `code-for-canada/c4c-workbench` on the **Marketplaces** tab, then **Install** it from the **Plugins** tab. |
| **Whole organization** (Team, Enterprise) | Owners go to **Organization settings → Plugins & skills → Add → Upload a plugin** and upload the zip, then choose who gets it. |

### ChatGPT and Codex

| Where | How |
|---|---|
| **ChatGPT** (web and desktop) | Open **Plugins** and add `https://github.com/code-for-canada/c4c-workbench`. Workspace admins can add it for everyone from the [Admin console](https://admin.openai.com) → **Plugins → Add**, by importing this repo or uploading the zip. |
| **Codex CLI** | `codex plugin marketplace add code-for-canada/c4c-workbench`, then `codex plugin add c4c-workbench@c4c-workbench`. Start a new session. |

### GitHub Copilot

Copilot installs plugins as `plugin@marketplace`, so add this repo as a marketplace first, then install `c4c-workbench@c4c-workbench`.

| Where | How |
|---|---|
| **GitHub Copilot app** | Open **Customize**, select the marketplace settings button next to the marketplace dropdown, and add `code-for-canada/c4c-workbench`. Then find C4C Workbench under **Browse** and select **Install**, or enter `c4c-workbench@c4c-workbench` in **Install plugin**. |
| **VS Code** | Run **Chat: Manage Plugin Marketplaces** from the Command Palette, select **Add Marketplace...** and enter `code-for-canada/c4c-workbench`. Then open **Customize**, search for C4C Workbench and select **Install**. |
| **Copilot CLI** | `copilot plugin marketplace add code-for-canada/c4c-workbench`, then `copilot plugin install c4c-workbench@c4c-workbench`. |
| **Copilot cloud agent** (github.com) | Add the marketplace and plugin to the repo's `.github/copilot/settings.json`, using the same keys as the enterprise example below. |
| **Visual Studio** | Skills only. Copy the folders in [`skills/`](skills/) into `~/.copilot/skills/`. |

**Whole enterprise.** Admins add it to `copilot/managed-settings.json` in the enterprise's `.github-private` repository. `extraKnownMarketplaces` makes it available to everyone, and `enabledPlugins` installs it for everyone (`true`) or blocks it (`false`). Check the file under **AI controls → Agents → Copilot settings validation**.

```json
{
  "extraKnownMarketplaces": {
    "c4c-workbench": {
      "source": { "source": "github", "repo": "code-for-canada/c4c-workbench" }
    }
  },
  "enabledPlugins": {
    "c4c-workbench@c4c-workbench": true
  }
}
```

### Microsoft 365 Copilot

| Where | How |
|---|---|
| **Copilot Cowork** | **Plugins → Add → Upload**, then upload `c4c-workbench-<version>.zip`. Cowork converts it automatically. Use **Share** to give it to colleagues. Needs a Microsoft 365 Copilot licence. |
| **Copilot Chat** | Skills only, one at a time. Zip a single folder from [`skills/`](skills/), then go to **Agents → More agents → Add → Upload skill**. Needs Microsoft Copilot Premium. |
| **Whole organization** | Admins go to the Microsoft 365 admin center → **Agents → Tools → Registry → Upload**, upload `c4c-workbench-m365-<version>.zip`, choose who gets it under **Scope users**, then **Install**. |

## Contributing

The plugin follows the [Agent Plugins 1.0](https://agent-plugins.org/specification) standard, plus a Claude manifest, since Claude doesn't read that format yet.

| Component | Claude | Codex / ChatGPT | Copilot / VS Code |
|---|---|---|---|
| Skills (`skills/`) | ✅ | ✅ | ✅ |
| MCP servers | `.mcp.json` | `mcp.json` | `mcp.json` |
| Subagents | `agents/` | — | `com.github.copilot/agents/` |



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

Bump `version` in `plugin.json`, `.claude-plugin/plugin.json` and each `marketplace.json` (`.claude-plugin/`, `.github/plugin/`), then check that everything agrees:

```bash
node scripts/validate.mjs
```

</details>

## License

[MIT](LICENSE) © Code for Canada
