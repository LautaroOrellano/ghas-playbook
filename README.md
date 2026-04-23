# GHAS Playbook

Practical, opinionated guides to implement GitHub Advanced Security (GHAS) in real projects.

## Why this repo exists

Official documentation from GitHub is:
- fragmented
- too theoretical
- hard to apply in real CI/CD pipelines

This repo focuses on:
- real setups
- copy-paste templates
- troubleshooting from real-world usage

## Quickstart (Code Scanning in 10 minutes)

Get CodeQL running in minutes.

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
4. Push to main
5. Go to: Security → Code Scanning alerts

### What you'll find here

- Setup guides
- Production-ready templates
- Common pitfalls
- Real troubleshooting

## Custom Queries (Advanced)

This repository includes real custom CodeQL queries:

- Hardcoded secrets detection
- Insecure eval usage
- Basic SQL injection patterns

These are examples of how to extend GitHub Advanced Security beyond default rules.

### Try it instantly

Clone this repo and enable GitHub Advanced Security.
The workflow is already configured and ready to run.

### Roadmap

- [x] Code Scanning 
- [ ] Secret Scanning
- [ ] Dependency Review
- [ ] CI/CD integrations


