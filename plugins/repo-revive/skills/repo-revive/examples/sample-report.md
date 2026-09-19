# Repo Revive Report — sample-storefront

**Mode:** diagnose  
**Scope:** `main`, working tree dirty (two pre-existing files preserved)  
**Detected stack:** Vite + React + TypeScript, npm

## Project Health Snapshot

| Area | Status | Evidence / reason |
|---|---|---|
| Build | FAIL | `npm run build` exited 2 on unresolved `@/components/Checkout` import. |
| Tests | UNVERIFIED | No test script declared. |
| Lint / typecheck | PARTIAL | `npm run lint` passed; no separate typecheck script declared. |
| Configuration | WARNING | `.env.example` lists `VITE_API_URL`; runtime fallback points to localhost. Production value was not available. |
| Security | LIKELY | `src/routes/Admin.tsx:8` renders admin content without a visible route guard; server authorization was not available for inspection. |
| Core flows | PARTIAL | Checkout component cannot be bundled; browser flow was not run. |
| Documentation | WARNING | README setup omits the required API URL. |
| Deployment | UNVERIFIED | No deployment config found. |

## Evidence Log

| Check | Outcome | Evidence |
|---|---|---|
| `npm run build` | failed | Exit 2: `Cannot find module '@/components/Checkout'`. |
| `npm run lint` | passed | Exit 0. |
| `package.json` inspection | available | Scripts: dev, build, lint. No test/typecheck. |

## Findings

### PR-001 — Checkout import prevents production build

- **Severity:** HIGH
- **Evidence state:** VERIFIED
- **Evidence:** `npm run build` exited 2; `src/App.tsx:4` imports `@/components/Checkout`, while no matching file was found.
- **Impact:** The application cannot produce a production bundle.
- **Next action:** Restore the intended component or correct the import, then re-run the build.

### PR-002 — Admin access control cannot be confirmed

- **Severity:** HIGH
- **Evidence state:** LIKELY
- **Evidence:** `src/routes/Admin.tsx:8` renders management UI; no client route guard was found. API/server code was absent from this repository.
- **Impact:** If this route is published without server-side authorization, users may reach administrative UI or actions.
- **Next action:** Confirm server-side authorization and add/verify route guarding; do not treat this as a confirmed bypass without runtime evidence.

## Unverified / Information Needed

- Payment behavior: no test credentials or safe sandbox configuration were supplied.
- Production API configuration: provide a redacted deployment configuration or a sandbox environment.

