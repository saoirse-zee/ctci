const { BinaryTreeNode } = require("./lib/binary-tree");

function minimalTree(elements) {
  if (elements.length < 1) {
    return null;
  }

  const middleIndex = Math.floor(elements.length / 2);
  const middleValue = elements[middleIndex];
  const root = new BinaryTreeNode(middleValue);
  const leftElements = elements.slice(0, middleIndex);
  const rightElements = elements.slice(middleIndex + 1, elements.length);
  root.left = minimalTree(leftElements);
  root.right = minimalTree(rightElements);

  return root;
}

module.exports = minimalTree;
