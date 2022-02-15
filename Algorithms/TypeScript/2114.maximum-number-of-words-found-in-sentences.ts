/*
 * @lc app=leetcode id=2114 lang=typescript
 *
 * [2114] Maximum Number of Words Found in Sentences
 */

// @lc code=start
function mostWordsFound(sentences: string[]): number {
  let max = 0;

  sentences.map((sentence: string) => {
    const len = sentence.split(" ").length;
    max = Math.max(max, len);
  });

  return max;

};
// @lc code=end

