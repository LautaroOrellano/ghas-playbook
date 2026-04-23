# GHAS Playbook 🛡️

Practical, opinionated guides to implement GitHub Advanced Security (GHAS) and CodeQL in real projects. No fluff, just execution.

![GitHub Advanced Security](https://img.shields.io/badge/GitHub-Advanced_Security-blue?logo=github)
![CodeQL](https://img.shields.io/badge/CodeQL-Ready-success)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Quickstart (Code Scanning in 10 minutes)

Get CodeQL running in minutes. Skip the theory, see the results.

1. Enable **GitHub Advanced Security** in your repo settings.
2. Create `.github/workflows/codeql.yml`
3. Paste this ready-to-use template:

```yaml
name: "CodeQL"

on:
  push:
    branches: [ "main" ]
  pull_request:

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest

    permissions:
      security-events: write
      contents: read

    steps:
      - uses: actions/checkout@v4

      - name: Initialize CodeQL
        uses: github/codeql-action/init@v3
        with:
          languages: javascript

      - name: Autobuild
        uses: github/codeql-action/autobuild@v3

      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v3
```
4. Push to `main`.
5. Go to: **Security → Code Scanning alerts** to see your vulnerabilities.

---

## Why this repo exists

Official documentation from GitHub is great but often too theoretical and hard to apply directly in real CI/CD pipelines. 

This playbook focuses on:
- **Real setups** that work in enterprise environments.
- **Copy-paste templates** to save hours of debugging.
- **Real-world troubleshooting** for when things break.

---

## The Playground (Try it instantly)

Don't believe it works? Try it yourself:

1. **Fork** this repository.
2. Make sure GHAS is enabled in your fork.
3. Check the **Security** tab. CodeQL will automatically scan the `playground-app/` folder and find:
   - 🚨 SQL Injections
   - 🚨 Insecure `eval()` usage
   - 🚨 Hardcoded Secrets

*The `playground-app` contains realistic vulnerable code simulating a junior dev in a rush. Perfect for testing custom queries.*

---

## Documentation & Guides

Dive deeper when you need more than the quickstart:

- 📖 [Implementation Guide](docs/implementation.md) - Best practices and how to tune the analysis.
- 🔧 [Troubleshooting](docs/troubleshooting.md) - Fixes for "Autobuild fails", "No results found", etc.
- 🕵️ [Custom Queries](docs/custom-queries.md) - How to write and use custom CodeQL rules.
- 📋 [Templates](/templates) - Advanced and Java-specific workflow templates.

---

## Roadmap

- [x] Code Scanning implementation guides
- [x] Custom Queries examples
- [ ] Secret Scanning deep dive
- [ ] Dependency Review setup
- [ ] CI/CD enterprise integrations
