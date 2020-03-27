const test = require('ava');
const isPermutation = require('./1.2-permutation')

test('returns true when the two are permutations', t => {
  const result = isPermutation("cat", "act")
  t.true(result)
});

test('returns false when the two are not permutations', t => {
  const result = isPermutation("cat", "dog")
  t.false(result)
});

test.only('correctly handles strings of different length', t => {
  const result = isPermutation("aa", "aab")
  t.false(result)
});

test('considers two empty strings to be permutations of one another', t => {
  const result = isPermutation("", "")
  t.true(result)
});