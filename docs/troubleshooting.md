# Troubleshooting CodeQL

If CodeQL fails or doesn't behave as expected, find your issue below.

> [!TIP]
> Always check the **Actions tab** logs first. The `Perform CodeQL Analysis` step usually tells you exactly what went wrong.

---

<details>
<summary><b>🚨 No results found</b></summary>

**Causes:** Repo is too small, or the wrong language was detected.  
**Fix:** Explicitly define the language in your workflow `init` step instead of relying on auto-detect.
</details>

<details>
<summary><b>🚨 Autobuild fails (Very common in Java/C#)</b></summary>

**Causes:** Missing dependencies, complex monorepos, or custom build scripts.  
**Fix:** Replace the `autobuild` action with your actual build command.
```yaml
- name: Build with Maven
  run: mvn -B clean install -DskipTests
```
</details>

<details>
<summary><b>🚨 Workflow not triggering</b></summary>

**Causes:** Wrong branch name, or workflow not in `.github/workflows/`.  
**Fix:** Verify branch filters in the `on:` section and ensure file location is correct.
</details>

<details>
<summary><b>🚨 CodeQL not detecting correct language</b></summary>

**Causes:** Mixed repository (multiple languages) or missing language in config.  
**Fix:** Define languages explicitly in the `init` step.
</details>

<details>
<summary><b>🚨 Too many false positives or noise</b></summary>

**Causes:** Using the `security-and-quality` suite which includes linting rules, or scanning test files.  
**Fix:**
1. Switch to `security-extended` queries.
2. Use a `codeql-config.yml` to exclude test folders and `node_modules`.
</details>

<details>
<summary><b>🚨 Scan takes too long</b></summary>

**Causes:** Large repository or scanning generated code.  
**Fix:** Exclude paths like `node_modules`, `dist`, `build`, and `coverage` in your `codeql-config.yml`.
</details>

<details>
<summary><b>🚨 SARIF not generated</b></summary>

**Causes:** Analysis step failed or wrong output configuration.  
**Fix:** Check the `analyze` step logs for underlying errors.
</details>

<details>
<summary><b>🚨 Permission denied (security-events)</b></summary>

**Causes:** Missing `GITHUB_TOKEN` permissions in the workflow.  
**Fix:** Ensure your job has these exact permissions:
```yaml
permissions:
  security-events: write
  contents: read
```
</details>

<details>
<summary><b>🚨 PR scan not running</b></summary>

**Causes:** Missing `pull_request` trigger or restricted permissions.  
**Fix:** Add `pull_request:` in your workflow `on:` triggers.
</details>

<details>
<summary><b>🚨 Alerts not appearing in Security tab</b></summary>

**Causes:** GHAS not enabled or analysis not completed.  
**Fix:** Enable GHAS in repo settings and verify the workflow ran successfully.
</details>

<details>
<summary><b>🚨 CodeQL not running in private repositories</b></summary>

**Causes:** 
- GitHub Advanced Security (GHAS) not enabled for the repository.
- Organization does not have GHAS license.
- Feature not enabled at organization level.

**Fix:** 
1. Enable GHAS in repository settings.
2. Verify organization has a GHAS license.
3. Ask organization admin to enable security features.
</details>

<details>
<summary><b>🚨 Security tab not visible</b></summary>

**Causes:** GHAS not enabled or insufficient repository permissions.  
**Fix:** Enable GHAS and check your repository access level.
</details>
