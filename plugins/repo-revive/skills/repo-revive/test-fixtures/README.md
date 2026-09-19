# Evaluation Fixtures

Each case is intentionally small. A correct rescue run identifies only the evidence supported by the fixture and preserves uncertainty. Do not execute install, deploy, migration, or secret-rotation actions against fixtures.

| Fixture | Expected key behavior |
|---|---|
| broken-build | VERIFIED high build failure from declared script/output |
| missing-env | INFORMATION NEEDED or LIKELY config condition, not a runtime failure |
| broken-imports | VERIFIED unresolved import after safe inspection/build |
| unfinished-features | Concrete placeholder/empty handler finding, no pejorative project label |
| security-findings | Evidence-grounded auth/secret concerns with redaction |
| unsupported-conclusions | Reject claims not established by supplied source |

