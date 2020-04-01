const test = require("ava");
const { Graph, GraphNode } = require("./graph");

test("creates an undirected graph", (t) => {
  const n1 = new GraphNode("1");
  const n2 = new GraphNode("2");
  n1.neighbor = n2;
  n2.neighbor = n1;

  const g = new Graph();
  g.nodes = n1;
  g.nodes = n2;

  const result = g.toString();
  t.is(result, `1: 2\n2: 1`);
});

test("creates a directed graph", (t) => {
  const n1 = new GraphNode("1");
  const n2 = new GraphNode("2");
  n1.neighbor = n2;

  const g = new Graph();
  g.nodes = n1;
  g.nodes = n2;

  const result = g.toString();
  t.is(result, `1: 2\n2: 🕳`);
});

test("creates a graph with many nodes", (t) => {
  const n1 = new GraphNode("1");
  const n2 = new GraphNode("2");
  const n3 = new GraphNode("3");
  n1.neighbor = n2;
  n2.neighbor = n3;
  n3.neighbor = n1;

  const g = new Graph();
  g.nodes = n1;
  g.nodes = n2;
  g.nodes = n3;

  const result = g.toString();
  t.is(result, `1: 2\n2: 3\n3: 1`);
});
