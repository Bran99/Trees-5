// Time Complexity : O(N)
// Space Complexity : O(1)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root;
    
    let firstOfLevel = root;
    while (firstOfLevel.left != null) {
        let cursor = firstOfLevel;
        while (cursor != null) {
            cursor.left.next = cursor.right;
            if (cursor.next != null) {
                cursor.right.next = cursor.next.left;
            }
            cursor = cursor.next;
        }
        firstOfLevel = firstOfLevel.left;
    }
    return root;
};
