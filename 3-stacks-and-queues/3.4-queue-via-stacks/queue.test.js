const test = require("ava");
const Queue = require("./queue");

test("Can add items", (t) => {
  const q = new Queue();
  q.add("hi");
  q.add("bye");
  const firstIn = q.peek();

  t.is(firstIn, "hi");
});

test("Can remove an item", (t) => {
  const q = new Queue();
  q.add("hi");
  q.add("bye");
  q.remove();
  const next = q.peek();

  t.is(next, "bye");
});

test("Can add after removing", (t) => {
  const q = new Queue();
  q.add(1);
  q.add(2);
  q.remove();
  q.add(3);
  const next = q.peek();

  t.is(next, 2);
});

test("Handles a remove on empty queue", (t) => {
  const q = new Queue();
  const next = q.remove();

  t.is(next, undefined);
});
