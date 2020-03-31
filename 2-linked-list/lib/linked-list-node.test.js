const test = require("ava");
const LinkedListNode = require("./linked-list-node");

test("should create list node with value", t => {
  const node = new LinkedListNode(1);

  t.is(node.value, 1);
  t.is(node.next, null);
});

test("should create list node with object as a value", t => {
  const node = new LinkedListNode({ data: 'stuff', some_key: 'hi'});

  t.is(node.value.data, "stuff");
  t.is(node.value.some_key, "hi");
});

test("should link nodes together", t => {
  const node1 = new LinkedListNode(1);
  const node2 = new LinkedListNode(2);
  node1.next = node2

  t.is(node2.value, 2);
});
