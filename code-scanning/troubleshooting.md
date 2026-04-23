# Troubleshooting CodeQL

## No results found

Possible causes:
- repo too small
- wrong language detected

Fix:
- explicitly set language in config

---

## Autobuild fails

Common in:
- Java (missing dependencies)
- monorepos

Fix:
- replace autobuild with custom build step

---

## Workflow not triggering

Possible causes:
- wrong branch name
- workflow not in `.github/workflows/`

Fix:
- verify branch filters and file location

---

## CodeQL not detecting correct language

Possible causes:
- mixed repository (multiple languages)
- missing language in config

Fix:
- define languages explicitly in `init` step

---

## Too many false positives

Possible causes:
- broad query set
- low severity alerts included

Fix:
- use query filters or reduce query set

---

## Scan takes too long

Possible causes:
- large repository
- unnecessary paths included

Fix:
- exclude paths like `node_modules`, `dist`, `build`

---

## SARIF not generated

Possible causes:
- analysis step failed
- wrong output configuration

Fix:
- check `analyze` step and logs

---

## Permission denied (security-events)

Possible causes:
- missing workflow permissions

Fix:
- add:
  security-events: write

---

## PR scan not running

Possible causes:
- missing `pull_request` trigger
- restricted permissions

Fix:
- add `pull_request` in workflow triggers

---

## Alerts not appearing in Security tab

Possible causes:
- GHAS not enabled
- analysis not completed

Fix:
- enable GHAS and verify workflow success

## CodeQL not running in private repositories

Possible causes:
- GitHub Advanced Security (GHAS) not enabled for the repository
- Organization does not have GHAS license
- Feature not enabled at organization level

Fix:
- enable GHAS in repository settings
- verify organization has GHAS license
- ask organization admin to enable security features

## Security tab not visible

Possible causes:
- GHAS not enabled
- insufficient permissions

Fix:
- enable GHAS
- check repository access level
