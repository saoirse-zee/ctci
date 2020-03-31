const test = require("ava");
const { BinaryTreeNode, inOrderTraversal } = require("./binary-tree");

test("traverses a balanced tree of depth 2", t => {
  const headNode = new BinaryTreeNode("b");
  headNode.left = new BinaryTreeNode("a");
  headNode.right = new BinaryTreeNode("c");

  const result = inOrderTraversal(headNode);
  t.is(result, "abc");
});

test("traverses an unbalanced tree of depth 3", t => {
  const headNode = new BinaryTreeNode("3");
  headNode.left = new BinaryTreeNode("2");
  headNode.right = new BinaryTreeNode("4");
  headNode.left.left = new BinaryTreeNode("1");

  const result = inOrderTraversal(headNode);
  t.is(result, "1234");
});

test("traverses a tree with one node", t => {
  const headNode = new BinaryTreeNode("hi!");

  const result = inOrderTraversal(headNode);
  t.is(result, "hi!");
});

test.todo("inserts a new value");
// Should this be in order?
// See https://github.com/careercup/CtCI-6th-Edition-JavaScript/blob/master/chapter04/util/BST.js#L9
