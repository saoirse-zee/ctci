class Element {
  constructor(value, min) {
    this.value = value;
    this.min = min;
  }
}

class Stack {
  constructor() {
    this.data = [];
  }

  getMin() {
    return this.peek() && this.peek().min;
  }

  push(value) {
    const currentMin = this.getMin() || value;
    const relativeMin = Math.min(value, currentMin);
    const el = new Element(value, relativeMin);
    this.data.push(el);
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
