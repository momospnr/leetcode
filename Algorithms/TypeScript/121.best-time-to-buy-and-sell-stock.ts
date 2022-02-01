/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let mini = Number.MAX_VALUE;
  let ans = 0;

  prices.forEach((price: number) => {
    mini = Math.min(mini, price);
    ans = Math.max(ans, price - mini);
  });

  return ans;
};
// @lc code=end

