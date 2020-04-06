const test = require("ava");
const isPalindromePermutation = require("./1.4-is-palindrome-permutation");

test("correctly identifies an all-unique string", (t) => {
  const input = "Tact Coa";
  const result = isPalindromePermutation(input);
  t.true(result);
});

test("correctly identifies a string with repeating characters", (t) => {
  const input = "boo boo";
  const result = isPalindromePermutation(input);
  t.true(result);
});

test("correctly identifies a false", (t) => {
  const input = "abcde";
  const result = isPalindromePermutation(input);
  t.false(result);
});
