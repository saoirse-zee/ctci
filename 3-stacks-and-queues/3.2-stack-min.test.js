const test = require("ava");
const ArrayAsStack = require("./lib/stack-array");
const LinkedListAsStack = require("./lib/stack-linked-list");

function runTests(Stack, v) {
  test(`${v}: can find the minimum element`, (t) => {
    const s = new Stack();
    s.push(2);
    s.push(1);
    s.push(3);
    const result = s.min.toString();

    t.is(result, "1");
  });
}

const implementations = [ArrayAsStack, LinkedListAsStack];
implementations.forEach((imp, i) => {
  runTests(imp, i);
});
