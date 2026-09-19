const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');

const cli = path.join(__dirname, '..', 'bin', 'repo-revive.js');

test('dry run identifies the Codex destination without creating it', () => {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'repo-revive-'));
  const output = execFileSync(process.execPath, [cli, 'codex', '--dry-run'], {
    env: { ...process.env, CODEX_HOME: home }, encoding: 'utf8'
  });
  assert.match(output, /Would install Repo Revive/);
  assert.equal(fs.existsSync(path.join(home, 'skills', 'repo-revive')), false);
  fs.rmSync(home, { recursive: true, force: true });
});

test('installer copies the skill entrypoint', () => {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'repo-revive-'));
  execFileSync(process.execPath, [cli, 'codex'], { env: { ...process.env, CODEX_HOME: home } });
  const skill = path.join(home, 'skills', 'repo-revive', 'SKILL.md');
  assert.equal(fs.existsSync(skill), true);
  assert.match(fs.readFileSync(skill, 'utf8'), /name: repo-revive/);
  fs.rmSync(home, { recursive: true, force: true });
});
