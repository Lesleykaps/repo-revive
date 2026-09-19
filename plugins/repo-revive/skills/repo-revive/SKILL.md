---
name: repo-revive
description: Diagnose, plan recovery for, and conservatively repair unfinished or broken software repositories with evidence-backed findings. Use for stalled, abandoned, failing, or AI-generated projects; not for greenfield implementation.
---

# Repo Revive

Recover the project in front of you without inventing failures or changing its design unnecessarily. Interpret `$repo-revive [diagnose|plan|repair]`; default to `diagnose`.

## Modes

- **diagnose (default):** Read-only inspection and safe validation. Deliver a rescue report; do not write repository files.
- **plan:** Perform diagnosis, then deliver an ordered recovery plan. Do not alter repository files.
- **repair:** Diagnose and plan first; make only conservative, in-scope changes, validate them, and report the exact diff. Stop for a needed decision, credential, migration, payment action, deployment, or destructive operation.

## Core procedure

1. Establish scope: identify the repository root; inspect `git status`, branch, recent diff, README, package/configuration files, and ignore rules. Treat pre-existing changes as user work.
2. Detect the stack and package manager from actual files and lockfiles. Read [JavaScript/TypeScript](references/javascript-typescript.md) or [Python](references/python.md) as applicable. Use [Investigation rules](references/investigation-rules.md) and [Evidence policy](references/evidence-policy.md) for every run.
3. Inventory evaluable areas: build, tests, lint, type-check, routes, configuration, data/auth/integrations, deployment, documentation. Mark unavailable areas **UNVERIFIED** with a reason.
4. Run only safe, project-declared validation commands when dependencies and environment allow. Capture command, exit state, concise output, and relevant file/line evidence.
5. Create findings following [Severity model](references/severity-model.md). Severity and evidence state are independent. Describe concrete engineering conditions, not insulting labels.
6. For `plan` and `repair`, use [Recovery plan](templates/recovery-plan.md). In `repair`, follow [Repair safety](references/repair-safety.md), re-run relevant checks, and distinguish fixed, remaining, and unverified items.
7. Produce the report using [Output schema](references/output-schema.md) and [Rescue report](templates/rescue-report.md). The Health Snapshot uses only PASS, FAIL, PARTIAL, WARNING, or UNVERIFIED.

## Boundaries

- Do not install packages, change lockfiles, publish, deploy, push, migrate data, rotate secrets, or contact external systems unless explicitly requested.
- Never expose secret values. Recommend revocation/removal for verified exposures; do not rotate without authorization.
- Prefer small repairs preserving observable behavior. Do not replace frameworks or broadly rewrite architecture without explicit request.
- Check applicable concrete patterns: placeholders, empty handlers, mocked production paths, hard-coded identities/URLs, fake auth/payments, unprotected admin routes, duplicate/dead code, unused dependencies, console debugging, incomplete migrations, missing loading/error states. Report only evidence-supported instances.

## Reference routing

- Read [Security checks](references/security-checks.md) when a security, auth, secrets, payments, data, or deployment surface exists.
- Read [Repair safety](references/repair-safety.md) only in repair mode.
- Read stack guides only for detected stacks; use both for mixed repositories.

