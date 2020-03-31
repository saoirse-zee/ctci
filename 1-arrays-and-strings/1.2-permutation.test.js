const test = require("ava");
const isPermutationWithSet = require("./1.2-permutation-with-set");
const isPermutationBasic = require("./1.2-permutation");

/**
 * Runs this set of tests for a given implemenation.
 * 
 * @param {function} isPermutation - An implementation of this function.
 * @param {number} v - The version number of this implementation.
 */
function runTests(isPermutation, v) {
  test(`${v}: returns true when the two are permutations`, t => {
    const result = isPermutation("cat", "act");
    t.true(result);
  });

  test(`${v}: returns false when the two are not permutations`, t => {
    const result = isPermutation("cat", "dog");
    t.false(result);
  });

  test(`${v}: correctly handles strings of different length`, t => {
    const result = isPermutation("aa", "aab");
    t.false(result);
  });

  test(`${v}: considers two empty strings to be permutations of one another`, t => {
    const result = isPermutation("", "");
    t.true(result);
  });
}

const implementations = [isPermutationBasic, isPermutationWithSet];

implementations.forEach((func, i) => {
  runTests(func, i);
});
