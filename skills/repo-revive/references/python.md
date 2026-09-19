# Python Guide

Detect `pyproject.toml`, `requirements*.txt`, `Pipfile`, Poetry/UV configuration, virtual environments, application entrypoints, and test configuration. Do not create environments, install packages, or run arbitrary setup hooks unless authorized.

When declared dependencies are already available, run narrow safe checks such as `pytest`, `python -m compileall`, or configured lint/type commands. Record interpreter/environment used. Inspect imports, settings/env handling, URL/router registration, migration state, error paths, secrets, and framework-specific configuration (Django/Flask/FastAPI) only where present.

Missing dependencies or service configuration make a check UNVERIFIED, not failed.

