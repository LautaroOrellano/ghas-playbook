/**
 * @name Possible SQL Injection (basic pattern)
 * @description Detects SQL queries built via string concatenation
 * @kind problem
 * @problem.severity error
 * @security-severity 9.0
 * @tags security
 *       external/cwe/cwe-89
 */

import java

from MethodAccess ma, BinaryExpr concat
where
  ma.getMethod().getName() = "executeQuery" and
  concat = ma.getArgument(0) and
  concat.toString().matches("%+%")
select ma, "Possible SQL injection via string concatenation."
