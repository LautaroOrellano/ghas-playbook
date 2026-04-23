# GHAS Playbook

Practical, opinionated guides to implement GitHub Advanced Security (GHAS) in real projects.

## Why this repo exists

Official documentation is:
- fragmented
- too theoretical
- hard to apply in real CI/CD pipelines

This repo focuses on:
- real setups
- copy-paste templates
- troubleshooting from real-world usage

## Quickstart (Code Scanning in 10 minutes)

1. Enable GHAS in your repo
2. Create `.github/workflows/codeql.yml`
3. Paste this:

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
      - uses: actions/checkout@v6

      - name: Initialize CodeQL
        uses: github/codeql-action/init@v3
        with:
          languages: javascript

      - name: Autobuild
        uses: github/codeql-action/autobuild@v3

      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v3
