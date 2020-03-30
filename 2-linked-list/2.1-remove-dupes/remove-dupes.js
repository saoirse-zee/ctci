const LinkedList = require("../linked-list");

/**
 * Removes duplicates from a linked list.
 * Mutates the original list.
 *
 * @param {LinkedList} list
 */
function removeDupes(list) {
  let current = list.head;
  let prev = null;
  const valuesSet = new Set();

  while (current.next !== null) {
    if (valuesSet.has(current.value)) {
      // Remove the current node by updating the "next pointer" of the previous node. Note that `prev` itself stays where it is!
      prev.next = current.next;
    } else {
      valuesSet.add(current.value);
      // Iterate `prev`
      prev = current;
    }
    // Iterate `current`
    current = current.next;
  }

  // Check the last node
  if (valuesSet.has(current.value)) {
    // Remove the last node
    prev.next = null;
  }
}

module.exports = removeDupes;
