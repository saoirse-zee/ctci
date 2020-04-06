/**
 * Determines if a string has all unique characters.
 */
function isUnique(s) {
  const seen = {};
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (!seen[char]) {
      seen[char] = true;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isUnique;
