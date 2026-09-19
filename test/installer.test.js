const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.join(__dirname, '..');
const cli = path.join(root, 'bin', 'repo-revive.js');

test('help documents the two supported hosts without making changes', () => {
  const output = execFileSync(process.execPath, [cli, '--help'], { encoding: 'utf8' });
  assert.match(output, /@ciphertechnologies\/repo-revive <codex\|claude>/);
  assert.match(output, /does not inspect, change, or upload any repository/);
});

test('marketplace and plugin manifests identify the same plugin', () => {
  const marketplace = JSON.parse(fs.readFileSync(path.join(root, '.agents', 'plugins', 'marketplace.json')));
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'plugins', 'repo-revive', '.codex-plugin', 'plugin.json')));
  assert.equal(marketplace.name, 'cipher-technologies-repo-revive');
  assert.equal(marketplace.plugins[0].name, manifest.name);
  assert.equal(manifest.name, 'repo-revive');
  assert.equal(fs.existsSync(path.join(root, 'plugins', 'repo-revive', 'skills', 'repo-revive', 'SKILL.md')), true);
});
