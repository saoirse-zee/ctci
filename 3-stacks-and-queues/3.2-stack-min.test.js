const test = require("ava");
const Stack = require("./3.2-stack-min");

function runTests(Stack, v) {
  test(`${v}: can find the minimum element after pushes only`, (t) => {
    const s = new Stack();
    s.push(2);
    s.push(1);
    s.push(3);
    const result = s.getMin().toString();

    t.is(result, "1");
  });

  test(`${v}: can find the minimum element after a pop`, (t) => {
    const s = new Stack();
    s.push(2);
    s.push(3);
    s.push(1);
    s.pop();
    const result = s.getMin().toString();

    t.is(result, "2");
  });
}

const implementations = [
  // ArrayAsStack,
  // LinkedListAsStack
  Stack,
];
implementations.forEach((imp, i) => {
  runTests(imp, i);
});
