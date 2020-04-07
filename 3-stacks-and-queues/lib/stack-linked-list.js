const LinkedList = require("../../2-linked-list/lib/linked-list");

class Stack {
  constructor() {
    this.data = new LinkedList();
    this.min = undefined;
  }

  push(element) {
    if (!this.min) {
      this.min = element;
    }
    this.min = Math.min(this.min, element);
    this.data.append(element);
  }

  pop() {
    const tail = this.data.tail;
    this.data.removeLast();
    return tail;
  }

  peek() {
    const tail = this.data.tail;
    return tail;
  }

  isEmpty() {
    return this.data.head === null;
  }

  toString() {
    return this.data.toString();
  }
}

module.exports = Stack;
