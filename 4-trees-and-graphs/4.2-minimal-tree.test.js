const test = require("ava");
const minimalTree = require("./4.2-minimal-tree");
const { inOrderTraversal } = require("./lib/binary-tree");

test("creates balanced tree from three elements", (t) => {
  const elements = [1, 2, 3];
  const tree = minimalTree(elements);
  const result = inOrderTraversal(tree);

  t.is(result, "123");
});

test("creates balanced tree from five elements", (t) => {
  const elements = [1, 2, 3, 4];
  const tree = minimalTree(elements);
  const result = inOrderTraversal(tree);

  t.is(result, "1234");
});

test("creates balanced tree from four elements", (t) => {
  const elements = [1, 2, 3, 4, 5];
  const tree = minimalTree(elements);
  const result = inOrderTraversal(tree);

  t.is(result, "12345");
});
