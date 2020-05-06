const test = require("ava");
const largestIsland = require("./largest-island");

test("finds size of one island in a 2x2 sea", (t) => {
  const input = [
    [1, 1],
    [0, 0],
  ];
  const result = largestIsland(input);
  t.is(result, 2);
});

test("finds size for sea with multiple islands", (t) => {
  const input = [
    [1, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 1, 1],
  ];
  const result = largestIsland(input);
  t.is(result, 5);
});

test("finds size across diagonals", (t) => {
  const input = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 0],
  ];
  const result = largestIsland(input);
  t.is(result, 3);
});
