/*
 * @lc app=leetcode id=1470 lang=typescript
 *
 * [1470] Shuffle the Array
 */

// @lc code=start
function shuffle(nums: number[], n: number): number[] {
  const ans: number[] = [];

  for (let i = 0; i < n; i++) {
    ans.push(nums[i], nums[i+n]);
  }

  return ans;
};
// @lc code=end

