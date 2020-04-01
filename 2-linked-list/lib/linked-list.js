const LinkedListNode = require("./linked-list-node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  toString() {
    if (this.head === null) {
      return "";
    }
    let current = this.head;
    let string = current.toString();
    while (current.next !== null) {
      current = current.next;
      string += "-" + current.toString();
    }
    return string;
  }
}

module.exports = LinkedList;
