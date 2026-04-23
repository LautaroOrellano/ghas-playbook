# Troubleshooting CodeQL

## No results found

Possible causes:
- repo too small
- wrong language detected

Fix:
- explicitly set language in config

## Autobuild fails

Common in:
- Java (missing dependencies)
- monorepos

Fix:
- replace autobuild with custom build step

---


