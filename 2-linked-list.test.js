const test = require("ava");
const linkedList = require("./2-linked-list");

test("a new node's data is an empty string", t => {
  const node = linkedList.createNode();
  const actual = node.getData()
  const expected = ""
  t.is(actual, expected);
});

test("a new node has no next", t => {
  const node = linkedList.createNode();
  const actual = node.getNext()
  const expected = null
  t.is(actual, expected);
});

test("can set data on a node", t => {
  const node = linkedList.createNode();
  node.setData("hi");
  const actual = node.getData()
  const expected = "hi"
  t.is(actual, expected);
});

test("can set next node", t => {
  const node1 = linkedList.createNode();
  node1.setData("1");

  const node2 = linkedList.createNode();
  node2.setData("2");

  node1.setNext(node2);
  const actual = node1.getNext().getData()
  const expected = "2"

  t.is(actual, expected)
});
