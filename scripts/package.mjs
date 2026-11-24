#!/usr/bin/env node
// Builds two zips in dist/ for manual installs:
// - c4c-workbench-<version>.zip: one top-level c4c-workbench/ folder, which both
//   Claude and ChatGPT accept. ChatGPT's admin upload still asks for
//   .codex-plugin/plugin.json, so it is generated here from plugin.json.
// - c4c-workbench-m365-<version>.zip: a Microsoft 365 app package (manifest.json,
//   icons and skills/) for the Microsoft 365 admin center's plugin registry.
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, readdirSync, existsSync } from "node:fs";
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

// Microsoft 365 app package. Keep the id fixed so uploads update the same plugin.
const M365_ID = "081d8810-cf84-43df-9489-bbcbcd7598ce";
const m365Zip = join(dist, `${name}-m365-${version}.zip`);
const m365Stage = join(dist, "m365");
const skills = readdirSync(join(root, "skills")).filter((d) =>
  existsSync(join(root, "skills", d, "SKILL.md")),
);
const ui = openai.interface ?? {};
const m365 = {
  $schema: "https://developer.microsoft.com/en-us/json-schemas/teams/v1.28/MicrosoftTeams.schema.json",
  manifestVersion: "1.28",
  version,
  id: M365_ID,
  developer: {
    name: ui.developerName ?? manifest.author.name,
    websiteUrl: manifest.homepage,
    privacyUrl: ui.privacyPolicyURL,
    termsOfUseUrl: ui.termsOfServiceURL,
  },
  name: { short: ui.displayName ?? name },
  description: { short: ui.shortDescription ?? manifest.description, full: ui.longDescription ?? manifest.description },
  icons: { color: "color.png", outline: "outline.png" },
  accentColor: ui.brandColor ?? "#FFFFFF",
  agentSkills: skills.map((d) => ({ folder: `./skills/${d}` })),
};
rmSync(m365Stage, { recursive: true, force: true });
rmSync(m365Zip, { force: true });
mkdirSync(m365Stage, { recursive: true });
cpSync(join(root, "skills"), join(m365Stage, "skills"), {
  recursive: true,
  filter: (src) => !EXCLUDE.has(basename(src)),
});
cpSync(join(root, "assets/color.png"), join(m365Stage, "color.png"));
cpSync(join(root, "assets/outline.png"), join(m365Stage, "outline.png"));
writeFileSync(join(m365Stage, "manifest.json"), JSON.stringify(m365, null, 2) + "\n");
execFileSync("zip", ["-rqX", m365Zip, "."], { cwd: m365Stage, stdio: "inherit" });
rmSync(m365Stage, { recursive: true, force: true });
console.log(`✓ Built ${relative(root, m365Zip)}`);
