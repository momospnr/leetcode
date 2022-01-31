/*
 * @lc app=leetcode id=1480 lang=typescript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
function runningSum(nums: number[]): number[] {
  const ans: number[] = [nums[0]];
  nums.reduce((prev: number, cur: number) => {
    const next = prev + cur;
    ans.push(next);
    return next;
  });
  return ans;
};
// @lc code=end

