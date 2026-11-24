#!/usr/bin/env node
// Checks that the per-tool manifests agree with each other and that skills and
// MCP configs are well formed. No dependencies: run with `node scripts/validate.mjs`.
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const fail = (msg) => errors.push(msg);

function readJson(rel) {
  const path = join(root, rel);
  if (!existsSync(path)) return fail(`${rel}: missing`);
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (e) {
    fail(`${rel}: invalid JSON (${e.message})`);
  }
}

const PLUGIN_SCHEMA = "https://agent-plugins.org/schemas/1.0.0/plugin.schema.json";
const MCP_SCHEMA = "https://agent-plugins.org/schemas/1.0.0/mcp.schema.json";
const NAME_RE = /^(?!.*(?:--|\.\.))[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?$/;
const PORTABLE_FIELDS = new Set([
  "$schema", "name", "version", "description", "author", "homepage",
  "repository", "license", "keywords", "extensions",
]);

// --- Manifests ---------------------------------------------------------------
const portable = readJson("plugin.json"); // Agent Plugins 1.0 (Codex, ChatGPT, Copilot, VS Code)
const claude = readJson(".claude-plugin/plugin.json"); // Claude Code, Claude Desktop, Cowork
const claudeMarket = readJson(".claude-plugin/marketplace.json"); // Claude
const openaiMarket = readJson(".agents/plugins/marketplace.json"); // Codex, ChatGPT
const copilotMarket = readJson(".github/plugin/marketplace.json"); // GitHub Copilot

if (portable) {
  if (portable.$schema !== PLUGIN_SCHEMA) fail(`plugin.json: $schema must be ${PLUGIN_SCHEMA}`);
  if (!NAME_RE.test(portable.name ?? "") || portable.name.length > 64)
    fail(`plugin.json: name "${portable.name}" is not a valid Agent Plugins name`);
  for (const key of Object.keys(portable))
    if (!PORTABLE_FIELDS.has(key)) fail(`plugin.json: "${key}" is not an Agent Plugins 1.0 field`);
  const authorKeys = Object.keys(portable.author ?? {});
  for (const key of authorKeys)
    if (!["name", "email", "url"].includes(key)) fail(`plugin.json: author.${key} is not allowed`);
}

if (portable && claude) {
  for (const field of ["name", "version", "description", "license"])
    if (portable[field] !== claude[field])
      fail(`${field} differs: plugin.json="${portable[field]}" vs .claude-plugin/plugin.json="${claude[field]}"`);
}

const name = portable?.name;
for (const [file, market] of [
  [".claude-plugin/marketplace.json", claudeMarket],
  [".agents/plugins/marketplace.json", openaiMarket],
  [".github/plugin/marketplace.json", copilotMarket],
]) {
  if (!market) continue;
  const entry = market.plugins?.find((p) => p.name === name);
  if (!entry) fail(`${file}: no plugin entry named "${name}"`);
  if (entry?.version && entry.version !== portable.version)
    fail(`${file}: version "${entry.version}" differs from plugin.json "${portable.version}"`);
}

// --- MCP ---------------------------------------------------------------------
const mcp = readJson("mcp.json");
const claudeMcp = readJson(".mcp.json");
if (mcp) {
  if (mcp.$schema !== MCP_SCHEMA) fail(`mcp.json: $schema must be ${MCP_SCHEMA}`);
  for (const [server, cfg] of Object.entries(mcp.mcpServers ?? {}))
    if (!["stdio", "streamable-http", "sse"].includes(cfg.type))
      fail(`mcp.json: server "${server}" needs type stdio, streamable-http or sse`);
}
if (mcp && claudeMcp) {
  const a = Object.keys(mcp.mcpServers ?? {}).sort().join(",");
  const b = Object.keys(claudeMcp.mcpServers ?? {}).sort().join(",");
  if (a !== b) fail(`MCP servers differ: mcp.json=[${a}] vs .mcp.json=[${b}]`);
}

// --- Skills ------------------------------------------------------------------
const skillsDir = join(root, "skills");
let skillCount = 0;
if (existsSync(skillsDir)) {
  for (const dir of readdirSync(skillsDir)) {
    const skillPath = join(skillsDir, dir);
    if (!statSync(skillPath).isDirectory()) continue;
    const file = join(skillPath, "SKILL.md");
    if (!existsSync(file)) {
      fail(`skills/${dir}: missing SKILL.md`);
      continue;
    }
    skillCount++;
    const front = readFileSync(file, "utf8").match(/^---\n([\s\S]*?)\n---/);
    if (!front) {
      fail(`skills/${dir}/SKILL.md: missing YAML frontmatter`);
      continue;
    }
    const skillName = front[1].match(/^name:\s*(.+)$/m)?.[1]?.trim().replace(/^["']|["']$/g, "");
    const desc = front[1].match(/^description:\s*(.+)$/m)?.[1]?.trim();
    if (skillName !== dir) fail(`skills/${dir}/SKILL.md: name "${skillName}" must match folder "${dir}"`);
    if (!desc) fail(`skills/${dir}/SKILL.md: description is required`);
  }
}

// --- Report ------------------------------------------------------------------
if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):\n  - ${errors.join("\n  - ")}`);
  process.exit(1);
}
console.log(`✓ ${name}@${portable.version}: manifests in sync, ${skillCount} skill(s)`);
