const test = require("ava");
const LinkedList = require("../lib/linked-list");
const removeDupes = require("./remove-dupes")

test("should remove a single duplicate", t => {
  const list = new LinkedList();
  list.append("a")
  list.append("b")
  list.append("a")
  list.append("c")
  removeDupes(list)

  t.is(list.toString(), "a-b-c");
})

test("should remove multiple duplicates", t => {
  const list = new LinkedList();
  list.append("a")
  list.append("b")
  list.append("b")
  list.append("b")
  list.append("a")
  list.append("c")
  removeDupes(list)

  t.is(list.toString(), "a-b-c");
})

test("should remove duplicates from the end", t => {
  const list = new LinkedList();
  list.append("a")
  list.append("b")
  list.append("c")
  list.append("c")
  list.append("c")
  removeDupes(list)

  t.is(list.toString(), "a-b-c");
})

test("should consider a single-node list a non-dupe", t => {
  const list = new LinkedList();
  list.append("a")
  removeDupes(list)

  t.is(list.toString(), "a");
})