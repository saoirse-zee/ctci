/**
 * Creates a new tree node with spots for two children.
 */
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Traverses a tree "in order" -- it visits the left branch, the current node, then the right branch.
 * @param {BinaryTreeNode}
 * @returns {string} - the concatenation of the values of all nodes
 */
function inOrderTraversal(node) {
  let string = "";
  if (node !== null) {
    string += inOrderTraversal(node.left);
    string += node.value;
    string += inOrderTraversal(node.right);
  }
  return string;
}

module.exports = {
  BinaryTreeNode,
  inOrderTraversal,
};
