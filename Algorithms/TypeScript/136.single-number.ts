/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  const map = new Map();
  nums.forEach((num: number) => {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.delete(num);
    }

  });

  for (const iterator of map) {
    if (iterator[1] === 1) {
      return iterator[0];
    }
  }
};
// @lc code=end

