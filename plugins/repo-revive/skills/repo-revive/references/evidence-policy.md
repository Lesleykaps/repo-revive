# Evidence Policy

Every finding has a **severity** and an independent **evidence state**.

| State | Meaning | Minimum basis |
|---|---|---|
| VERIFIED | Directly demonstrated | Reproducible command output, source/config at a specific location, or an observable behavior |
| LIKELY | Strongly indicated but not fully exercised | Corroborating code/configuration, with a stated gap |
| POSSIBLE | Worth considering, not established | Limited signal; phrase as a question/risk, not a failure |
| INFORMATION NEEDED | Cannot assess | Required artifact, access, credential, or runtime dependency is absent |

## Required finding content

Include ID, title, severity, evidence state, impact, exact evidence, affected scope, and a proportional next action. Cite file paths and line numbers when available. For command evidence include the command and exit result.

## Prohibited leaps

Do not infer that an endpoint is exploitable merely because it exists; inspect access controls. Do not call a dependency unused without searching imports/configuration and considering runtime/plugin loading. Do not claim a secret is valid, a database migration is unsafe, an environment variable is required, or a feature is broken without direct evidence. Never turn a failed command caused by missing dependencies/credentials into an application failure.

When evidence conflicts, report the conflict. When validation cannot run, preserve the distinction between “not tested” and “failed.”

