# Templates

This folder contains ready-to-use CodeQL workflow templates for different levels of complexity.

The goal is simple: **get GitHub Advanced Security running in minutes**, not hours.

---

## Available Templates

### 1. Quickstart (`codeql.yml`)

**Best for:**

* Small projects
* First-time users
* Fast setup with minimal configuration

**Features:**

* Single language (JavaScript by default)
* Uses built-in queries (`security-extended`)
* Works out of the box with autobuild

**How to use:**

1. Copy the file to your repository:

   ```
   .github/workflows/codeql.yml
   ```
2. Commit and push
3. Go to the **Security → Code scanning** tab to see results

---

### 2. When should I use something more advanced?

Use the full setup from this repository (`.github/workflows/codeql.yml`) if:

* You have a **monorepo**
* You use **multiple languages**
* You need **custom queries**
* You want **scheduled scans**
* You require **SARIF exports for auditing**

---

## Philosophy

These templates are intentionally:

* **Minimal** → no unnecessary complexity
* **Practical** → designed for real CI/CD usage
* **Copy-paste ready** → no external dependencies

If you need more control, move to the advanced setup provided in this repository.

---

## Next Steps

* Explore the [Implementation Guide](implementation.md) for deeper explanations
* Check [Custom Queries](custom-queries.md) for advanced CodeQL usage
* Upgrade to the full enterprise workflow when needed
