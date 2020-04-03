const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const resultMinus1 = fib(n - 1);
  const resultMinus2 = fib(n - 2);
  memo.set(n - 1, resultMinus1);
  memo.set(n - 2, resultMinus2);

  return resultMinus2 + resultMinus1;
}

module.exports = fib;
