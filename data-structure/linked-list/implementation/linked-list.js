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

  unshift(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAt(index, data) {
    if (index === 0) return;
    const newNode = new Node(data);
    const current = this.get(index - 1);

    const currentNext = current.next;
    current.next = newNode;
    newNode.next = currentNext;
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
  }

  shift() {
    const headNext = this.head.next;
    this.head = headNext;
  }

  deleteFrom(index) {
    const prevOfTargetNode = this.get(index - 1);

    const nextOfTargetNode = prevOfTargetNode.next.next;
    prevOfTargetNode.next = nextOfTargetNode;
  }

  pop() {
    let current = this.head;

    while (current.next !== this.tail) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
  }

  isPresent(key) {
    if (this.head.data === key || this.tail.data === key) return true;

    let current = this.head.next;
    while (current.next !== null) {
      if (current.data === key) return true;
      current = current.next;
    }

    return false;
  }

  get(index) {
    let i = 0;
    let current = this.head;
    while (i < index && current !== null) {
      current = current.next;
      i++;
    }
    return current;
  }

  display(placeHolder = "allNodes") {
    const result = [];
    let current = this.head;

    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    console.log({ [placeHolder]: result.join(" -> ") });
  }
}
