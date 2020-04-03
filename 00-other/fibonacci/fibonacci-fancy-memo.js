class FibMemo {
  constructor() {
    this.values = new Map();
    this.values.set(0, 0);
    this.values.set(1, 1);
  }
  set(n, value) {
    this.values.set(n, value);
    return value;
  }
  get(n) {
    return this.values.get(n);
  }
  has(n) {
    return this.values.has(n);
  }
}

const memo = new FibMemo();

function fib(n) {
  return memo.has(n) ? memo.get(n) : memo.set(n, fib(n - 2) + fib(n - 1));
}

module.exports = fib;
