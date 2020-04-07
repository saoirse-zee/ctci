const test = require("ava");
const ArrayAsStack = require("./stack-array");
const LinkedListAsStack = require("./stack-linked-list");

function runTests(Stack, v) {
  test(`${v}: can push an element onto the stack`, (t) => {
    const s = new Stack();
    s.push("hi");
    const result = s.toString();

    t.is(result, "hi");
  });

  test(`${v}: can push another element onto the stack`, (t) => {
    const s = new Stack();
    s.push("hi");
    s.push("bye");
    const result = s.toString();

    t.is(result, "hi-bye");
  });

  test(`${v}: can pop an element from the stack`, (t) => {
    const s = new Stack();
    s.push("hi");
    s.push("bye");
    const popped = s.pop().toString();
    const remainingStack = s.toString();

    t.is(popped, "bye");
    t.is(remainingStack, "hi");
  });

  test(`${v}: can peek at first element in the stack`, (t) => {
    const s = new Stack();
    s.push("hi");
    s.push("bye");
    const lastIn = s.peek().toString();
    const remainingStack = s.toString();

    t.is(lastIn, "bye");
    t.is(remainingStack, "hi-bye");
  });

  test(`${v}: can tell if the stack is not empty`, (t) => {
    const s = new Stack();
    s.push("hi");
    s.push("bye");

    t.false(s.isEmpty());
  });

  test(`${v}: can tell if the stack is empty`, (t) => {
    const s = new Stack();

    t.true(s.isEmpty());
  });
}

const implementations = [ArrayAsStack, LinkedListAsStack];
implementations.forEach((imp, i) => {
  runTests(imp, i);
});
