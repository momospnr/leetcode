/*
 * @lc app=leetcode id=1672 lang=typescript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
function maximumWealth(accounts: number[][]): number {
  const wealth = accounts.map((account: number[]) => {
    return account.reduce((a: number, b: number) => a + b)
  });

  return wealth.reduce((a: number, b: number) => a > b ? a : b)
};
// @lc code=end

