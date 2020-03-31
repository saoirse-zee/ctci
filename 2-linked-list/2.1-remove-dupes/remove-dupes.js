const LinkedList = require("../lib/linked-list");

/**
 * Removes duplicates from a linked list.
 * Mutates the original list.
 *
 * @param {LinkedList} list
 */
function removeDupes(list) {
  const seen = new Set();
  let current = list.head;
  let prev = null;

  while (current !== null) {
    if (seen.has(current.value)) {
      prev.next = current.next;
    } else {
      seen.add(current.value);
      prev = current;
    }
    current = current.next;
  }
}

module.exports = removeDupes;
