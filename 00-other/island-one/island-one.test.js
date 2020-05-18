const test = require("ava");
const countIslands = require("./island-one");

test("finds one island in a 2x2 sea", (t) => {
  const input = [
    [1, 1],
    [0, 0],
  ];
  const result = countIslands(input);
  t.is(result, 1);
});
