function fib(n) {
  let fibMinus2 = 0;
  let fibMinus1 = 1;
  let fibCurrent = fibMinus2 + fibMinus2;

  let i = 0;
  while (i < n) {
    fibMinus2 = fibMinus1;
    fibMinus1 = fibCurrent;
    fibCurrent = fibMinus2 + fibMinus1;
    i++;
  }

  return fibCurrent;
}

module.exports = fib;
