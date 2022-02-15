/*
 * @lc app=leetcode id=1512 lang=typescript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
function numIdenticalPairs(nums: number[]): number {
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
     if (nums[i] === nums[j]) {
       ans++;
     }
    }
  }
  return ans;
};
// @lc code=end

