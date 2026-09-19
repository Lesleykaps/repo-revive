# Investigation Rules

## Establish facts first

Start from repository artifacts, not assumptions. Record root path, Git state, detected stack, lockfiles, manifests, scripts, README claims, configuration examples, CI/deployment files, and available service definitions. A missing file is evidence only of that file's absence—not of a failed runtime feature.

## Safe validation ladder

Use the least invasive relevant command already declared by the project. Inspect scripts before executing them. Prefer syntax/type/lint/test/build commands that do not mutate state. Do not run dev servers indefinitely, database migrations, seeders, deploy scripts, `postinstall`, arbitrary setup scripts, or scripts that contact production without explicit approval.

Record each attempted check as command, working directory, exit outcome, and concise relevant output. If dependencies, credentials, network access, or runtime services are absent, say so and mark that surface UNVERIFIED.

## Scope by technology

Assess only relevant surfaces. A static site does not need an ORM review; a library may not have routes. Where a project claims a capability (for example auth in README), compare that claim with directly inspectable code/configuration.

## Inspection cues

Search for TODO/FIXME, placeholder text, empty callbacks, `throw new Error('not implemented')`, mock/demo data in production paths, hard-coded identity/URL values, fake success paths, commented-out code, duplicate components, unreachable routes, unused dependencies, console output, incomplete migration files, and UI paths without loading/error behavior. Inspect surrounding control flow before filing a finding.

## Git discipline

Before repair, capture `git status --short`, branch, and diff summary. Do not overwrite, revert, stage, commit, clean, or reset pre-existing changes. A non-Git directory is not an error; report the limitation.

