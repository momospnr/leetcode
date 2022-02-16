/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
interface ListNode {
  val: number;
  next: ListNode | null;
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (head?.val !== 0 && ! head?.val || ! head?.next) {
    return head;
  }

  const val = head.val;
  const nextVal = head.next.val;

  head.val = nextVal;
  head.next.val = val;

  if (head.next.next) {
    swapPairs(head.next.next);
  }

  return head;

};
// @lc code=end

