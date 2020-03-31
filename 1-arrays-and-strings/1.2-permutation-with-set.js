/**
 * Checks if one string is a permutation of another.
 *
 * @param {string} s1
 * @param {string} s2
 */
function isPermutation(s1, s2) {
  // Turn each string into a set
    // First turn the string into an array
    // then, turn the array into a set
  const set1 = new Set(s1.split(''))
  const set2 = new Set(s2.split(''))
  
  const diff = set1
  // Iterate over set2
  for (let char of set2) {
    // If char is in diff already (it was in set1, thus is a common element) remove from diff
    if (diff.has(char)) {
      diff.delete(char)
    } else {
      diff.add(char)
    }
    // else (it is unique to set1) add to diff
  }

  // if diff has any elements, return false
  return diff.size === 0
}

module.exports = isPermutation;
