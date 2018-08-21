/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (!root) {
      return 0;
  }
  let sum = 0;
  if (root.left && !root.left.left && !root.left.right) {
      sum = root.left.val;
  }
  return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);    
};