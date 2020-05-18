class Queue {
  constructor() {
    this.oldestOnTop = [];
    this.newestOnTop = [];
  }
  add(item) {
    this.newestOnTop.push(item);
  }
  remove() {
    this.shiftStacks();
    return this.oldestOnTop.pop();
  }
  peek() {
    this.shiftStacks();
    const lastIndex = this.oldestOnTop.length - 1;
    return this.oldestOnTop[lastIndex];
  }
  shiftStacks() {
    if (this.oldestOnTop.length < 1) {
      while (this.newestOnTop.length > 0) {
        this.oldestOnTop.push(this.newestOnTop.pop());
      }
    }
  }
}

module.exports = Queue;
