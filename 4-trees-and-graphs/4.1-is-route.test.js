const test = require("ava");
const { GraphNode } = require("./lib/graph");
const isRoute = require("./4.1-is-route");

test("returns true when there is a route", (t) => {
  const n1 = new GraphNode("1");
  const n2 = new GraphNode("2");
  n1.neighbor = n2;
  n2.neighbor = n1;

  const result = isRoute(n1, n2);
  t.true(result);
});

test("returns false when there is no route", (t) => {
  const n1 = new GraphNode("1");
  const n2 = new GraphNode("2");

  const result = isRoute(n1, n2);
  t.false(result);
});
