const test = require("ava");
const LinkedList = require("./linked-list");

test("should create an empty linked list", t => {
  const list = new LinkedList();

  t.is(list.toString(), "");
});

test("should append node to linked list", t => {
  const linkedList = new LinkedList();

  t.is(linkedList.head, null);

  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  t.is(linkedList.toString(), "1-2-3");
});

test.todo("should prepend node to linked list");
test.todo("should delete node by value from linked list");
