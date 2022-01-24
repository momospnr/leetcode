/*
 * @lc app=leetcode id=520 lang=typescript
 *
 * [520] Detect Capital
 */

// @lc code=start
function detectCapitalUse(word: string): boolean {
  const wordArr = [...word];

  let firstWordIsCapital: boolean;
  let secondWordIsCapital: boolean;
  let ans: boolean = true;

  for (let i = 0; i < wordArr.length; i++) {
    if (!ans) {
      break;
    }

    if (i === 0) {
      firstWordIsCapital = /[A-Z]/.test(wordArr[i]);
      continue;
    }

    if (firstWordIsCapital && i === 1) {
      secondWordIsCapital = /[A-Z]/.test(wordArr[i]);
    }

    if (!firstWordIsCapital && secondWordIsCapital) {
      ans = false;
      continue;
    }

    if (firstWordIsCapital && secondWordIsCapital) {
      ans = /[A-Z]/.test(wordArr[i]);
      continue;
    }

    ans = /[a-z]/.test(wordArr[i]);
  }

  return ans;
};
// @lc code=end

