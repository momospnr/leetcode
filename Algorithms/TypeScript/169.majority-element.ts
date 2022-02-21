/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  const map = new Map();
  const obj = {
    max: {
      key: 0,
      value: 0
    }
  };

  nums.forEach((num: number) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }

    if (obj.max.value < map.get(num) ) {
      obj.max.key = num;
      obj.max.value = map.get(num);
    }
  });

  return obj.max.key;
};
// @lc code=end

