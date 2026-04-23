/**
 * @name Insecure use of eval
 * @description Detects usage of eval which can lead to code injection
 * @kind problem
 * @problem.severity error
 * @security-severity 9.0
 * @tags security
 *       external/cwe/cwe-95
 */

import javascript

from CallExpression call
where
  call.getCallee().getName() = "eval"
select call, "Use of eval is dangerous and can lead to code injection."
