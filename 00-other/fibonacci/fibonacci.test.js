const test = require("ava");
const fibonacciIterative = require("./fibonacci-iterative");
const fibonacciRecursive = require("./fibonacci-recursive");
const fibonacciMemo = require("./fibonacci-memo");
const fibonacciFancyMemo = require("./fibonacci-fancy-memo");

function runTests(fib, v) {
  test(`${v}: finds value at position 0`, (t) => {
    const result = fib(0);
    t.is(result, 0);
  });
  test(`${v}: finds value at position 1`, (t) => {
    const result = fib(1);
    t.is(result, 1);
  });
  test(`${v}: finds value at position 2`, (t) => {
    const result = fib(2);
    t.is(result, 1);
  });
  test(`${v}: finds value at position 3`, (t) => {
    const result = fib(3);
    t.is(result, 2);
  });
  test(`${v}: finds value at position 8`, (t) => {
    const result = fib(8);
    t.is(result, 21);
  });
  test(`${v}: finds value at position 12`, (t) => {
    const result = fib(12);
    t.is(result, 144);
  });
}

const implementations = [
  fibonacciIterative,
  fibonacciRecursive,
  fibonacciMemo,
  fibonacciFancyMemo,
];
implementations.forEach((func, i) => {
  runTests(func, i);
});

/**
 * These tests show that the memo and iterative versions
 * can handle a large number, but the naive recursive verion blows up.
 */
test("memoized version finds value at position 1000", (t) => {
  const result = fibonacciMemo(1000);
  t.is(result, 4.346655768693743e208);
});

test("fancy memoized version finds value at position 1000", (t) => {
  const result = fibonacciFancyMemo(1000);
  t.is(result, 4.346655768693743e208);
});

test("iterative version finds value at position 1000", (t) => {
  const result = fibonacciIterative(1000);
  t.is(result, 4.346655768693743e208);
});

// The recursive version will fail in a time out error.
// test("recursive version finds value at position 1000", t => {
//   const result = fibonacciRecursive(1000);
//   t.is(result, 4.346655768693743e+208);
// });
