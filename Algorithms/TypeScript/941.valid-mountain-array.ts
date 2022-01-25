/*
 * @lc app=leetcode id=941 lang=typescript
 *
 * [941] Valid Mountain Array
 */

// @lc code=start
function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) {
    return false;
  }

  const state = {
    increasing: true,
    decreasing: false,
    increased: false,
    decreased: false
  };

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i+1]) {
      return false
    }

    if (state.increasing && arr[i] < arr[i+1]) {
      state.increased = true;
    }

    if (state.increasing && arr[i] > arr[i+1]) {
      state.increasing = false;
      state.decreasing = true;
    }

    if (state.decreasing && arr[i] > arr[i+1]) {
      state.decreased = true;
    }

    if (state.decreasing && arr[i] < arr[i+1]) {
      return false;
    }
  }

  return state.increased && state.decreased;
};
// @lc code=end

