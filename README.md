# Repo Revive

Repo Revive is a Codex plugin and npm installer for evidence-backed diagnosis, recovery planning, and conservative repair of troubled software repositories.

It supports three modes:

- `diagnose` (default): read-only investigation and validated findings.
- `plan`: read-only diagnosis plus an ordered recovery plan.
- `repair`: small, verified, behavior-preserving fixes after diagnosis and planning.

## Install

For Codex:

```bash
npx @ciphertechnologies/repo-revive codex
```

For Claude Code:

```bash
npx @ciphertechnologies/repo-revive claude
```

The installer adds the public GitHub marketplace and installs Repo Revive. It does not inspect, upload, or change a repository. Start a new chat after installation and use `$repo-revive:repo-revive` in Codex or `/repo-revive:repo-revive` in Claude Code.

## Included plugin structure

The public marketplace source is [`.agents/plugins/marketplace.json`](.agents/plugins/marketplace.json), with the installable plugin in [`plugins/repo-revive`](plugins/repo-revive). The skill supports JS/TS, React, Next.js, Node, Vite, HTML/CSS/JS, and Python, and has awareness of Git/GitHub, Supabase/Postgres, Vercel, Docker, package managers, and `.env` configuration.

Findings always separate impact severity from evidence state. Unavailable checks are reported as **UNVERIFIED**, and the health snapshot uses PASS, FAIL, PARTIAL, WARNING, or UNVERIFIED rather than arbitrary scores.

## Development

```bash
npm test
npm run pack:check
```

## Privacy and license

Repo Revive is local-file-first and does not require an account or send repository content. See [PRIVACY.md](PRIVACY.md), [TERMS.md](TERMS.md), and [LICENSE](LICENSE).
