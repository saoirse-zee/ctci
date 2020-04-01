const test = require("ava");
const urlify = require("./1.3-urlify");

test("handles a multi-word string", (t) => {
  const s = "cat is okay";
  const result = urlify(s);
  t.is(result, "cat%20is%20okay");
});

test("handles multiple whitespaces in a row", (t) => {
  const s = "cat   is  okay";
  const result = urlify(s);
  t.is(result, "cat%20is%20okay");
});

test("handles a single word string with space at end", (t) => {
  const s = "cat ";
  const result = urlify(s);
  t.is(result, "cat");
});
