const valueMap = new Map();
valueMap.set("I", 1);
valueMap.set("V", 5);
valueMap.set("X", 10);
// Other Roman numerals can be set here.

/**
 * Converts a Roman numeral to an integer.
 *
 * @param {string} romanString
 */
function romanToInt(romanString) {
  let result = 0;
  const array = romanString.split("");
  let currentIndex = 0;
  let currentChar = array[currentIndex];
  let nextChar = array[currentIndex + 1];

  while (currentChar) {
    const charValue = valueMap.get(currentChar);
    const nextCharValue = valueMap.get(nextChar);

    if (nextCharValue && nextCharValue > charValue) {
      result -= charValue;
    } else {
      result += charValue;
    }

    currentIndex++;
    currentChar = array[currentIndex];
    nextChar = array[currentIndex + 1];
  }

  return result;
}

module.exports = romanToInt;
