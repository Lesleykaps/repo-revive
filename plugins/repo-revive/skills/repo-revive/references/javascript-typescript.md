# JavaScript / TypeScript Guide

Detect package manager from lockfiles: `pnpm-lock.yaml` → pnpm, `yarn.lock` → Yarn, `package-lock.json` → npm; when more than one exists, report ambiguity and do not choose destructively. Inspect `package.json` scripts and tool config before running declared checks.

Typical safe checks, only when declared and dependencies are present: package-manager `run lint`, `run typecheck`/`run check`, `test`, and `run build`. Prefer non-watch, non-interactive variants. Treat script side effects as a reason not to run it.

Inspect TS config, framework config, route directories, API handlers, environment variable use, error/loading boundaries, import graph errors, browser-only code in server contexts, and build/deploy config. For React/Next/Vite, distinguish components that are unused from route-reachable components. For static sites, inspect entry HTML, asset paths, forms and client-side fallbacks.

