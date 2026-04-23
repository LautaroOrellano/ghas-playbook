# Custom CodeQL Queries

Default queries are powerful, but they can’t enforce *your* company's specific security policies. That's where custom queries come in.

## What you can detect

- Hardcoded secrets specific to your infra.
- Usage of deprecated internal APIs.
- Business-logic anti-patterns.

> [!TIP]
> Check the `codeql/custom-queries/` folder in this repo for real, ready-to-use examples for Java and JavaScript.

---

## Anatomy of a CodeQL Query

CodeQL is like SQL, but for code syntax trees. It follows a simple `from`, `where`, `select` structure.

Here is a 1-minute example of how it looks (finding `eval()` in JS):

```ql
import javascript // 1. Import the language library

from CallExpr call // 2. FROM: We are looking for a function call
where call.getCalleeName() = "eval" // 3. WHERE: The function name is 'eval'
select call, "Avoid using eval()!" // 4. SELECT: Return the finding and a message
```

## Structure in this Repo

* **`.ql` files**: Individual queries (e.g., `hardcoded-secrets.ql`).
* **`.qls` files**: Query suites. These group multiple `.ql` files together so you can run them all at once in your workflow.
