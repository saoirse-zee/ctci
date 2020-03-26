const test = require('ava');
const isUnique = require('./1.1-is-unique')

test('correctly identifies an all-unique string', t => {
  const s = "cat"
  const result = isUnique(s)
  t.true(result)
});

test('correctly identifies a string with repeated characters', t => {
  const s = "dad"
  const result = isUnique(s)
  t.false(result)
});

test('correctly handles a single character string', t => {
  const s = "a"
  const result = isUnique(s)
  t.true(result)
});

test('considers an empty string to be all-unique', t => {
  const s = ""
  const result = isUnique(s)
  t.true(result)
});

// test('throws if not provided a param', t => {
//   const result = isUnique()
//   // TODO: figure out how to handle throws
// });