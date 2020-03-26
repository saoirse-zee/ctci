/**
 * Determines if a string has all unique characters.
 */
function isUnique(s) {
  const charToFreq = {};
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    charToFreq[c] = !!charToFreq[c] ? charToFreq[c] + 1 : 1
  }

  const numOfUniqueChars = Object.values(charToFreq)
    .filter(freq => freq === 1)
    .length;

  const result = numOfUniqueChars === s.length

  return result;
}

module.exports = isUnique;
