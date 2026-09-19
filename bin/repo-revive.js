#!/usr/bin/env node
"use strict";

const { spawnSync } = require("node:child_process");

const REPOSITORY = "https://github.com/Lesleykaps/repo-revive.git";
const MARKETPLACE = "cipher-technologies-repo-revive";
const PLUGIN = "repo-revive";

function usage(exitCode = 0) {
  const output = `\nRepo Revive installer\n\nUsage:\n  npx @ciphertechnologies/repo-revive <codex|claude> [--yes]\n\nThis installer adds the Repo Revive marketplace and installs the plugin.\nIt does not inspect, change, or upload any repository.\n`;
  (exitCode === 0 ? process.stdout : process.stderr).write(output);
  process.exit(exitCode);
}

function run(command, args) {
  const result = process.platform === "win32"
    ? spawnSync(process.env.ComSpec || "cmd.exe", ["/d", "/c", [command, ...args].join(" ")], { stdio: "inherit", shell: false })
    : spawnSync(command, args, { stdio: "inherit", shell: false });
  if (result.error && result.error.code === "ENOENT") {
    throw new Error(`${command} was not found. Install ${command === "codex" ? "Codex CLI/Desktop" : "Claude Code"} first, then try again.`);
  }
  return result.status === 0;
}

function confirm() {
  if (process.argv.includes("--yes")) return Promise.resolve(true);
  if (!process.stdin.isTTY) return Promise.resolve(false);
  process.stdout.write("This will configure a marketplace and install Repo Revive. Continue? [y/N] ");
  return new Promise((resolve) => {
    process.stdin.setEncoding("utf8");
    process.stdin.once("data", (value) => resolve(/^y(es)?$/i.test(String(value).trim())));
  });
}

async function main() {
  const target = process.argv.slice(2).find((argument) => !argument.startsWith("-"));
  if (!target || process.argv.includes("--help") || process.argv.includes("-h")) usage();
  if (!['codex', 'claude'].includes(target)) usage(1);
  if (!(await confirm())) return process.stdout.write("Cancelled. No changes were made.\n");

  const marketplaceArgs = target === "codex"
    ? ["plugin", "marketplace", "add", REPOSITORY, "--ref", "main"]
    : ["plugin", "marketplace", "add", "Lesleykaps/repo-revive"];
  const pluginArgs = target === "codex"
    ? ["plugin", "add", `${PLUGIN}@${MARKETPLACE}`]
    : ["plugin", "install", `${PLUGIN}@${MARKETPLACE}`];
  const refreshArgs = target === "codex"
    ? ["plugin", "marketplace", "upgrade", MARKETPLACE]
    : ["plugin", "marketplace", "update", MARKETPLACE];

  process.stdout.write(`\nAdding the ${MARKETPLACE} marketplace…\n`);
  if (!run(target, marketplaceArgs)) process.stdout.write("Marketplace may already be configured; continuing with installation.\n");
  process.stdout.write("Refreshing the marketplace…\n");
  if (!run(target, refreshArgs)) throw new Error("Repo Revive marketplace could not be refreshed.");
  process.stdout.write("Installing Repo Revive…\n");
  if (!run(target, pluginArgs)) throw new Error("Repo Revive could not be installed.");
  process.stdout.write(`\nInstalled successfully. In a new ${target === "codex" ? "Codex" : "Claude Code"} chat, use ${target === "codex" ? "$repo-revive:repo-revive" : "/repo-revive:repo-revive"}.\n`);
}

main().catch((error) => { process.stderr.write(`\nInstallation failed: ${error.message}\n`); process.exit(1); });
