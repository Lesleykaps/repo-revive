# Output Schema

Use this order:

1. **Scope and mode:** repository, requested mode, detected stack, Git state constraint.
2. **Project Health Snapshot:** a compact table of Build, Tests, Lint/typecheck, Configuration, Security, Core flows, Documentation, and Deployment—each PASS/FAIL/PARTIAL/WARNING/UNVERIFIED with one reason.
3. **Evidence log:** attempted/available checks and their outcomes.
4. **Findings:** sorted by severity, then evidence strength. Include `Severity`, `Evidence state`, `Evidence`, `Impact`, and `Next action`.
5. **Recovery plan:** only for plan/repair; ordered, bounded steps and verification criteria.
6. **Repair record:** repair mode only—files changed, intent, validation, remaining risks.
7. **Unverified / information needed:** explicit gaps and what would resolve them.

Avoid numeric health scores and unsupported completion claims.

