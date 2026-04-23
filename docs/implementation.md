# Code Scanning Implementation Guide

This guide shows how to implement CodeQL using GitHub Advanced Security in a real project.

The focus is **practical setup**, not theory.

---

## Prerequisites

Before starting, make sure:

* GitHub Advanced Security is enabled in your repository
* You have permissions to create workflows
* Your default branch is `main` (or adjust accordingly)

---

## Step 1 — Add the workflow

Choose one of the templates:

* Basic → `templates/codeql.yml`
* Java projects → `templates/codeql-java.yml`
* Advanced setup → `.github/workflows/codeql.yml`

Copy the file into:

```
.github/workflows/codeql.yml
```

Commit and push.

---

## Step 2 — Trigger the scan

CodeQL runs automatically on:

* push to `main`
* pull requests
* scheduled scans (advanced setup)

You can also trigger it manually by pushing a small change.

---

## Step 3 — Verify results

Go to:

```
Repository → Security → Code scanning alerts
```

You should see:

* detected vulnerabilities
* severity levels
* affected files

---

## Step 4 — Understand results

Each alert includes:

* description of the issue
* severity (low → critical)
* code location
* remediation guidance

⚠️ Not all findings are real vulnerabilities. Some are false positives.

---

## Step 5 — Tune the analysis (recommended)

To reduce noise and improve accuracy:

* ignore unnecessary paths (`node_modules`, `dist`, etc.)
* adjust query sets (`security-extended`, `security-and-quality`)
* introduce custom queries for your use case

See:

```
.github/codeql/codeql-config.yml
```

---

## Step 6 — Use custom queries (advanced)

This repository includes example queries in:

```
/codeql/custom-queries/
```

You can:

* extend detection capabilities
* enforce internal security rules
* experiment with CodeQL

---

## Common Issues

### Autobuild fails

Common in:

* Java
* monorepos

Solution:

* replace autobuild with a manual build step (Maven/Gradle)

---

### No results found

Possible causes:

* small codebase
* incorrect language detection

Solution:

* explicitly define languages in the workflow

---

### Too many alerts

Cause:

* overly broad query set

Solution:

* use query filters in `codeql-config.yml`
* exclude low severity findings

---

## Best Practices

* Run scans on every pull request
* Add scheduled scans for inactive code
* Start simple, then move to advanced configuration
* Review alerts regularly (don’t ignore them)

---

## Next Steps

* Customize queries for your domain
* Integrate results into your CI/CD pipeline

