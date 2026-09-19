# Repair Safety

Repair mode is opt-in and conservative.

1. Capture Git status, branch, and diff before touching files. Preserve all pre-existing changes.
2. Repair only VERIFIED issues, or LIKELY issues when the user specifically accepts that uncertainty and the edit is reversible and low-risk.
3. Make the smallest change that addresses the stated issue. Do not alter public behavior, swap frameworks, change package manager, update broad dependency ranges, or regenerate lockfiles unless explicitly requested.
4. Do not delete files, reset/revert/clean Git state, run migrations, alter production configuration, rotate credentials, deploy, publish, or push without explicit approval.
5. Reinspect changed files and run the narrowest relevant safe validation. State exactly what was and was not verified.
6. If validation regresses or the expected outcome is unclear, stop; retain the user's existing work and explain the blocker.

Use a before/after change log with purpose, files, validation, and remaining risk. Never claim a repair is complete if its relevant check was unavailable.

