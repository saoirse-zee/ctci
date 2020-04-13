const test = require("ava");
const romanToInt = require("./roman-to-integer");

/**
 * Runs this set of tests for a given implemenation.
 *
 * @param {function} romanToInt - An implementation of this function.
 * @param {number} v - The version number of this implementation.
 */
function runTests(romanToInt, v) {
  test(`${v}: I`, (t) => {
    const result = romanToInt("I");
    t.is(result, 1);
  });
  test(`${v}: III`, (t) => {
    const result = romanToInt("III");
    t.is(result, 3);
  });
  test(`${v}: V`, (t) => {
    const result = romanToInt("V");
    t.is(result, 5);
  });
  test(`${v}: VI`, (t) => {
    const result = romanToInt("VI");
    t.is(result, 6);
  });
  test(`${v}: IV`, (t) => {
    const result = romanToInt("IV");
    t.is(result, 4);
  });
  test(`${v}: X`, (t) => {
    const result = romanToInt("X");
    t.is(result, 10);
  });
  test(`${v}: IX`, (t) => {
    const result = romanToInt("IX");
    t.is(result, 9);
  });
  test(`${v}: XIII`, (t) => {
    const result = romanToInt("XIII");
    t.is(result, 13);
  });
}

const implementations = [romanToInt];

implementations.forEach((func, i) => {
  runTests(func, i);
});
