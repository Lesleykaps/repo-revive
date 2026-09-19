# Repo Revive

Repo Revive is a Codex plugin and npm installer for evidence-backed diagnosis, recovery planning, and conservative repair of troubled software repositories.

It supports three modes:

- `diagnose` (default): read-only investigation and validated findings.
- `plan`: read-only diagnosis plus an ordered recovery plan.
- `repair`: small, verified, behavior-preserving fixes after diagnosis and planning.

## Install with npm

Install directly from GitHub now:

```bash
npm install -g github:Lesleykaps/repo-revive
repo-revive codex
```

After the package is published to the npm registry, the shorter command will work:

```bash
npx repo-revive codex
```

The installer copies `$repo-revive` into `~/.codex/skills/repo-revive`. It will not overwrite an existing installation unless you explicitly add `--force`.

```bash
npx repo-revive codex --dry-run
npx repo-revive codex --force
```

Start a new Codex task after installation, then use:

```text
Use $repo-revive diagnose this repository.
Use $repo-revive plan recovery without changing files.
Use $repo-revive repair the verified broken imports only and re-run relevant checks.
```

## Included plugin structure

The Codex manifest is [`.codex-plugin/plugin.json`](.codex-plugin/plugin.json); the skill is in [`skills/repo-revive`](skills/repo-revive). The skill supports JS/TS, React, Next.js, Node, Vite, HTML/CSS/JS, and Python, and has awareness of Git/GitHub, Supabase/Postgres, Vercel, Docker, package managers, and `.env` configuration.

Findings always separate impact severity from evidence state. Unavailable checks are reported as **UNVERIFIED**, and the health snapshot uses PASS, FAIL, PARTIAL, WARNING, or UNVERIFIED rather than arbitrary scores.

## Development

```bash
npm test
npm run pack:check
```

## Privacy and license

Repo Revive is local-file-first and does not require an account or send repository content. See [PRIVACY.md](PRIVACY.md), [TERMS.md](TERMS.md), and [LICENSE](LICENSE).
