# Security Checks

Inspect applicable surfaces without printing sensitive material. Flag committed secret-shaped values only by file/line and type; redact values in reports.

- **Secrets/configuration:** tracked `.env` files, keys/tokens in source, weak ignore rules, sample files containing real values.
- **Authentication/authorization:** route/middleware guards, server-side role checks, admin/API routes, client-only access checks, hard-coded user identifiers.
- **Data:** Supabase/Postgres policies, service-role use, migrations, parameterized queries, least-privilege configuration.
- **Payments/integrations:** server-side verification of provider callbacks, test/live mode separation, fake “paid” state transitions.
- **Web:** unvalidated input at dangerous sinks, insecure redirects, CORS/cookie/session configuration, exposed debug endpoints.
- **Deployments:** Docker/Vercel/CI configuration, environment variable wiring, debug flags, unpinned or privileged images where directly evidenced.

Do not exploit systems, make network security scans, authenticate to third-party systems, or validate credentials. A potential issue remains POSSIBLE or INFORMATION NEEDED until the required evidence exists.

