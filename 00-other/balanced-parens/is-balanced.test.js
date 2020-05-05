const test = require("ava");
const isBalanced = require("./is-balanced");

test("returns true for a balanced string", (t) => {
  const s = "(()())";
  const result = isBalanced(s);
  t.true(result);
});

test("returns false for an unbalanced string", (t) => {
  const s = "(()()";
  const result = isBalanced(s);
  t.false(result);
});

test("works for other brackets", (t) => {
  const s = "([]{})";
  const result = isBalanced(s);
  t.true(result);
});

test("works for other brackets - false", (t) => {
  const s = "([]{()({})})";
  const result = isBalanced(s);
  t.true(result);
});
