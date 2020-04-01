/**
 * Checks if one string is a permutation of another.
 *
 * @param {string} s1
 * @param {string} s2
 */
function isPermutation(s1, s2) {
  // Put each string into a set (or object)
  // QUESTION: Seems redundant. Any way to DRY this section?
  const set1 = {}; // QUESTION: Could this use a Set? If so, are there native Set methods that could be helpful?
  for (let i = 0; i < s1.length; i++) {
    const char = s1.charAt(i);
    set1[char] = char;
  }
  const set2 = {};
  for (let i = 0; i < s2.length; i++) {
    const char = s2.charAt(i);
    set2[char] = char;
  }

  // Turn each set into a sorted array.
  const array1 = Object.keys(set1).sort(); // QUESTION: This is probably O(log n). Is that so? Is that okay?
  const array2 = Object.keys(set2).sort();

  // Compare the arrays. QUESTION: Looks like O(n).
  // Iterate through the two arrays simultaneously, comparing each character as we go.
  let i = 0;
  while (i < array1.length && i < array2.length) {
    const char1 = array1[i];
    const char2 = array2[i];
    // If any two are not equal, return false.
    if (char1 !== char2) {
      return false;
    }
    i++;
  }

  // Check if there's anything left over.
  if (i < array1.length || i < array2.length) {
    return false;
  }

  // If we've made it through the two arrays (with nothing extra leftover), the two are permutations -- return true.
  return true;
}

module.exports = isPermutation;
