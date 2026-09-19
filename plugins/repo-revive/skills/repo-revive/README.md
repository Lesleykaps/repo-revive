# Repo Revive

`$repo-revive` is an evidence-first Codex/ChatGPT skill for diagnosing, planning recovery for, and conservatively repairing incomplete software repositories.

It is for repositories that are failing, abandoned, partly implemented, or assembled quickly from templates and generated code. It does not guess: every finding has a severity and a separate evidence state.

## Install

1. Download and extract `repo-revive.zip`.
2. Copy the extracted `repo-revive` folder into your Codex skills directory (usually `~/.codex/skills/`).
3. Start a new Codex task or reload skills.
4. In the repository to inspect, say: `Use $repo-revive diagnose this project.`

## Usage

```text
Use $repo-revive diagnose this repository.
Use $repo-revive plan the recovery of the current app; do not change files.
Use $repo-revive repair the verified broken imports only, then re-run the relevant checks.
```

`diagnose` is the default. `diagnose` and `plan` are read-only. `repair` checks Git state, avoids destructive operations and architecture replacements, and validates every change it makes.

## Coverage

V1 strongly supports JavaScript, TypeScript, React, Next.js, Node.js, Vite, static HTML/CSS/JS, and Python. It recognizes npm, pnpm, Yarn, Git/GitHub, Supabase/Postgres, Vercel, Docker, and `.env` configurations. It labels unavailable areas **UNVERIFIED** and reports health as PASS, FAIL, PARTIAL, WARNING, or UNVERIFIED—not a fabricated numeric grade.

See [examples/sample-report.md](examples/sample-report.md) and [test-fixtures](test-fixtures).

## License

MIT. See [LICENSE](LICENSE).

