class Graph {
  constructor() {
    this.children = [];
  }
  set nodes(newNode) {
    this.children.push(newNode);
  }
  toString() {
    const array = this.children.map((node) => {
      return `${node.toString()}: ${node.neighborsToString()}`;
    });
    return array.join("\n");
  }
}

class GraphNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  get neighbors() {
    return this.children;
  }
  set neighbor(newNeighbor) {
    this.children.push(newNeighbor);
  }
  toString() {
    return this.value || "🕳";
  }
  neighborsToString() {
    return this.neighbors.length > 0
      ? this.neighbors.map((neighbor) => neighbor.toString()).join("-")
      : "🕳";
  }
}

module.exports = {
  Graph,
  GraphNode,
};
