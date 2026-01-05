class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(data) {
    const newNode = new Node(data);
    this.length++;

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  display() {
    const result = [];
    let current = this.head;

    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }

  insertAt(index, data) {
    let i = 0;
    let current = this.head;
    while (i < index && current !== null) {
      current = current.next;
      i++;
    }
  }
}
