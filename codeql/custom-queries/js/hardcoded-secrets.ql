/**
 * @name Hardcoded secret detection
 * @description Detects potential hardcoded secrets in string literals
 * @kind problem
 * @problem.severity warning
 * @security-severity 7.5
 * @tags security
 *       credentials
 */

import javascript

from StringLiteral s
where
  s.getValue().regexpMatch("(?i)(password|api[_-]?key|secret|token)")
select s, "Potential hardcoded secret detected."
