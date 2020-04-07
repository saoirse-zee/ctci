class Stack {
  constructor() {
    this.data = [];
  }

  push(element) {
    this.data.push(element);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    const lastIndex = this.data.length - 1;
    return this.data[lastIndex];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  toString() {
    return this.data.join("-");
  }
}

module.exports = Stack;
