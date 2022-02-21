/*
 * @lc app=leetcode id=1689 lang=typescript
 *
 * [1689] Partitioning Into Minimum Number Of Deci-Binary Numbers
 */

// @lc code=start
function minPartitions(n: string): number {
  const arr = n.split('').map((num: string) => Number(num));
  const max = Math.max(...arr);
  return max;
};
// @lc code=end

