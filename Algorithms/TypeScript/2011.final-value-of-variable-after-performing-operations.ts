/*
 * @lc app=leetcode id=2011 lang=typescript
 *
 * [2011] Final Value of Variable After Performing Operations
 */

// @lc code=start
function finalValueAfterOperations(operations: string[]): number {
  let X: number = 0;
  for (const operation of operations) {
    if (operation.indexOf("++") > -1) {
      X++;
    }

    if (operation.indexOf("--") > -1) {
      X--;
    }
  }
  return X;
};
// @lc code=end

