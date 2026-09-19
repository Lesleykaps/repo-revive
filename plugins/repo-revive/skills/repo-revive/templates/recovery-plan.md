# Recovery Plan — {{repository}}

**Goal:** restore verified core functionality while preserving existing behavior.  
**Constraints:** {{Git state, no destructive actions, approval boundaries}}

| Order | Work item | Addresses | Change boundary | Verify | Owner / decision needed |
|---:|---|---|---|---|---|
| 1 | {{smallest high-priority action}} | {{finding IDs}} | {{files/systems}} | {{specific safe check}} | {{if needed}} |

## Sequencing notes

- Put blockers and confirmed security/build failures before cleanup.
- Keep unavailable work separate from failed work.
- Split any migration, credential, external service, destructive operation, or architecture change into an approval-gated step.

