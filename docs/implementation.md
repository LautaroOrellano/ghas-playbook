# Code Scanning Implementation Guide

This guide shows how to implement CodeQL using GitHub Advanced Security in a real project. Focus is **practical setup**, not theory.

> [!IMPORTANT]
> **Prerequisites:**
> * GitHub Advanced Security enabled in your repository.
> * Permissions to create workflows.
> * Default branch is `main` (adjust accordingly if not).

---

## Step 1: Add the Workflow

Choose the right template for your project. Copy it into `.github/workflows/codeql.yml`, commit, and push.

| Project Type | Template to use |
| :--- | :--- |
| **Simple / Single Language** | [`templates/codeql.yml`](../templates/codeql.yml) |
| **Java / Compiled** | [`templates/codeql-java.yml`](../templates/codeql-java.yml) |
| **Monorepo / Multi-language** | [`.github/workflows/codeql.yml`](../.github/workflows/codeql.yml) (Advanced) |

---

## Step 2: Trigger the Scan

CodeQL runs automatically on:
* Pushes to the default branch.
* Pull requests.

> [!TIP]
> To test it immediately without waiting for a real PR, just push a small empty commit or modify a README to trigger the Action.

---

## Step 3: Verify Results

Go to **Repository → Security → Code scanning alerts**.

You will see detected vulnerabilities, severity levels, and affected files. Each alert includes a description, exact code location, and remediation guidance.

> [!WARNING]
> Not all findings are critical vulnerabilities. CodeQL might flag "Security and Quality" issues that are low severity. Don't panic if you see a high number initially.

---

<details>
<summary><b>Step 4: Tune the Analysis (Advanced)</b></summary>

To reduce noise and improve accuracy, use a configuration file (`.github/codeql/codeql-config.yml`).

* **Ignore test paths** (`node_modules`, `dist`, `tests`).
* **Adjust query sets** (switch to `security-extended` or `security-and-quality`).

*Example:*
```yaml
paths-ignore:
  - 'tests'
  - 'node_modules'
```
</details>

<details>
<summary><b>Step 5: Use Custom Queries (Enterprise)</b></summary>

Need to enforce internal security rules? CodeQL lets you write custom rules.
Check out `codeql/custom-queries/` in this repository for real examples.
</details>

---

## Best Practices

* **Run scans on every pull request** to catch issues before they merge.
* **Review alerts regularly.** Don’t let them pile up.
* **Start simple**, then move to advanced configuration as your codebase grows.
