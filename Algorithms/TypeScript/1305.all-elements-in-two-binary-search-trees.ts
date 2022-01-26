/*
 * @lc app=leetcode id=1305 lang=typescript
 *
 * [1305] All Elements in Two Binary Search Trees
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  const arr = [];

  if (root1) {
    checkTreeNode(arr, root1);
  }

  if (root2) {
    checkTreeNode(arr, root2);
  }

  return arr.sort((a, b) => a - b);
};

function checkTreeNode(arr: number[], node: TreeNode) {
  arr.push(node.val);

  if (typeof node.left === 'number') {
    arr.push(node.left);
  }

  if (node.left && typeof node.left === 'object') {
    checkTreeNode(arr, node.left);
  }

  if (typeof node.right === 'number') {
    arr.push(node.right);
  }

  if (node.right && typeof node.right === 'object') {
    checkTreeNode(arr, node.right);
  }

  return;
}
// @lc code=end

