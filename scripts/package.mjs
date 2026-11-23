#!/usr/bin/env node
// Builds dist/c4c-workbench-<version>.zip for manual installs.
// The zip holds one top-level c4c-workbench/ folder, which both Claude and
// ChatGPT accept. ChatGPT's admin upload still asks for .codex-plugin/plugin.json,
// so it is generated here from plugin.json rather than kept in the repo.
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, readdirSync } from "node:fs";
import { join, dirname, basename, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
execFileSync(process.execPath, [join(root, "scripts/validate.mjs")], { stdio: "inherit" });

const manifest = JSON.parse(readFileSync(join(root, "plugin.json"), "utf8"));
const { name, version } = manifest;
const dist = join(root, "dist");
const stage = join(dist, "stage");
const pluginDir = join(stage, name);
const zipPath = join(dist, `${name}-${version}.zip`);

// Repo-only files that don't belong in an installed plugin.
const EXCLUDE = new Set([".git", "dist", "scripts", ".gitignore", ".DS_Store", ".gitkeep"]);

rmSync(stage, { recursive: true, force: true });
rmSync(zipPath, { force: true });
mkdirSync(pluginDir, { recursive: true });
for (const entry of readdirSync(root)) {
  if (EXCLUDE.has(entry)) continue;
  cpSync(join(root, entry), join(pluginDir, entry), {
    recursive: true,
    filter: (src) => !EXCLUDE.has(basename(src)),
  });
}

// OpenAI compatibility manifest (legacy layout), only inside the zip.
const openai = manifest.extensions?.["com.openai"] ?? {};
const mcp = JSON.parse(readFileSync(join(root, ".mcp.json"), "utf8"));
const codex = {
  name,
  version,
  description: manifest.description,
  author: manifest.author,
  license: manifest.license,
  keywords: manifest.keywords,
  skills: "./skills/",
  ...(Object.keys(mcp.mcpServers ?? {}).length && { mcpServers: "./.mcp.json" }),
  ...(openai.interface && { interface: openai.interface }),
};
mkdirSync(join(pluginDir, ".codex-plugin"));
writeFileSync(join(pluginDir, ".codex-plugin/plugin.json"), JSON.stringify(codex, null, 2) + "\n");

execFileSync("zip", ["-rqX", zipPath, name], { cwd: stage, stdio: "inherit" });
rmSync(stage, { recursive: true, force: true });
console.log(`✓ Built ${relative(root, zipPath)}`);
