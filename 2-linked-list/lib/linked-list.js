const LinkedListNode = require("./linked-list-node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    this.tail = newNode;
  }

  removeLast() {
    let current = this.head;
    while (current.next.value !== this.tail.value) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
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
