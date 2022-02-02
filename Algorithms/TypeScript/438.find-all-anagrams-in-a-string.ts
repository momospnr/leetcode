/*
 * @lc app=leetcode id=438 lang=typescript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  let ans: number[] = [];

  const pSize = p.length;
  let pMap = new Map();

  for (let i = 0; i < pSize; i++) {
    const cur = pMap.get(p[i]) || 0;
    pMap.set(p[i], cur + 1);
  }

  const isAnagram = (index: number) => {
    const size = index + pSize;
    if (size > s.length) {
      return false;
    }

    const map = new Map(pMap);
    for (let i = index; i < size; i++) {
      if (! map.has(s[i])) {
        return false;
      } else {
        const val = map.get(s[i]);
        if (val === 1) {
          map.delete(s[i]);
        }else{
          map.set(s[i], val - 1);
        }
      }
    }
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    if (isAnagram(i)) {
      ans.push(i);
    }
  }


  return ans;
};
// @lc code=end

