class LinkedListNode {
  constructor(initialValue) {
    this.value = initialValue;
    this.next = null;
  }

  toString() {
    if (typeof this.value === "object") {
      return Object.keys(this.value).reduce(
        (string, key) => (string += `${key}:${this.value[key]}`),
        ""
      );
    }
    return `${this.value}`;
  }
}

module.exports = LinkedListNode;
