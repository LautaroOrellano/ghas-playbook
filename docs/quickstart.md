# Templates Guide

This folder contains ready-to-use CodeQL workflow templates. The goal is simple: **get GHAS running in minutes, not hours.**

> [!IMPORTANT]
> If you just want to get started fast, use `codeql.yml`.

## Which template should I use?

| Template | Best For | Features |
| :--- | :--- | :--- |
| **[`codeql.yml`](../templates/codeql.yml)** | Small projects, JS/TS/Python | Single language, autobuild, default rules |
| **[`codeql-java.yml`](../templates/codeql-java.yml)** | Java Projects | Custom Maven build step, avoids autobuild issues |
| **[Advanced Workflow](../.github/workflows/codeql.yml)** | Enterprise, Monorepos | Matrix strategy, SARIF export, `codeql-config.yml` |

## Philosophy

These templates are intentionally:
* **Minimal** → no unnecessary complexity.
* **Practical** → designed for real CI/CD usage.
* **Copy-paste ready** → zero external dependencies.

If you need more control (custom queries, path exclusions), move to the advanced setup provided in `.github/workflows/codeql.yml`.
