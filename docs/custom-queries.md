# Custom CodeQL Queries

This folder contains custom CodeQL queries to extend default GitHub security analysis.

## Why custom queries?

Default queries are good, but they:
- may miss business-specific vulnerabilities
- can’t enforce internal security policies

## What you can add here

- Hardcoded secrets detection
- Unsafe API usage
- Company-specific anti-patterns

## Structure

- `.ql` → individual queries
- `.qls` → query suites

## Next steps

Add your first custom query and reference it in `custom-queries.qls`.
