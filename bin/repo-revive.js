#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const args = process.argv.slice(2);
const target = args.find((value) => !value.startsWith('-'));
const force = args.includes('--force');
const dryRun = args.includes('--dry-run');

function usage(exitCode = 0) {
  console.log('Usage: repo-revive codex [--force] [--dry-run]');
  console.log('Installs $repo-revive to ~/.codex/skills/repo-revive.');
  process.exit(exitCode);
}

if (args.includes('--help') || args.includes('-h') || !target) usage();
if (target !== 'codex') {
  console.error(`Unsupported target: ${target}. Only "codex" is supported.`);
  usage(1);
}

const source = path.resolve(__dirname, '..', 'skills', 'repo-revive');
const codexHome = process.env.CODEX_HOME || path.join(os.homedir(), '.codex');
const destination = path.join(codexHome, 'skills', 'repo-revive');

if (!fs.existsSync(source)) {
  console.error(`Packaged skill is missing: ${source}`);
  process.exit(1);
}
if (fs.existsSync(destination) && !force) {
  console.error(`Refusing to overwrite existing skill: ${destination}`);
  console.error('Re-run with --force only if replacing this installed skill is intended.');
  process.exit(1);
}

console.log(`${dryRun ? 'Would install' : 'Installing'} Repo Revive to ${destination}`);
if (!dryRun) {
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.cpSync(source, destination, { recursive: true, force: true, errorOnExist: false });
  console.log('Installed. Start a new Codex task, then use $repo-revive diagnose this repository.');
}
