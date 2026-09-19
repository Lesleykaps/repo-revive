# Severity Model

Severity describes impact if the condition is real; confidence is reported separately using the evidence policy.

| Severity | Use when | Typical response |
|---|---|---|
| CRITICAL | Confirmed data exposure/loss, privilege bypass, payment/security compromise, or complete production outage | Stop and contain; seek authority before consequential changes |
| HIGH | Build/release blocked, key journey unavailable, serious security control absent, or likely data corruption | Prioritize next |
| MEDIUM | Important feature degraded, maintainability/reliability risk with meaningful reach | Schedule in recovery plan |
| LOW | Localized quality, usability, or cleanup issue | Fix opportunistically |
| INFO | Observation, decision point, or context without a defect | Track only |

Do not inflate severity because a project is incomplete. A VERIFIED build failure can be HIGH; a POSSIBLE unauthenticated route is not automatically CRITICAL.

