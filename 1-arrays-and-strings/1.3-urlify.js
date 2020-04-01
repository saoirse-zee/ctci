/**
 * Replaces spaces with url-friendly characters.
 *
 * @param {string} s - A string with spaces
 */
function urlify(s) {
  return s
    .trim()
    .split(" ")
    .filter((substring) => substring !== "")
    .join("%20");
}

module.exports = urlify;
