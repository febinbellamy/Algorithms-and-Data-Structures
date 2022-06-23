class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adds a new node to the end of the list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // removes a node from the end of the list & returns it
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // removes a node from the beginning of the list
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // adds a new node to the beginning of the list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // retrieves a node by its position in the list
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // reassigns a node's value at a given position in the list
  set(index, val) {
    let specificNode = this.get(index);
    if (specificNode) {
      specificNode.val = val;
      return true;
    }
    return false;
  }

  // adds a new node to the list at a specific position
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (this.length === index) return !!this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let placeholderNode = prev.next;

    prevNode.next = newNode;
    newNode.next = placeholderNode;

    this.length++;
    return true;
  }

  // removes a node from the list at a specific position
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  // traverses and reverses the linked list in place
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let nextNode;
    let prevNode = null;
    let counter = 0;
    while (counter < this.length) {
      nextNode = node.next;
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
      counter++;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("TestingNode1");
list.push("TestingNode2");
list.push("TestingNode3");
list.push("TestingNode4");
list.pop();
list.pop();
list.shift();
list.shift();
list.unshift("Testing1");
list.unshift("Testing2");
list.unshift("Testing3");
list.get(1);
list.get(2);
list.set(2, "updatedN0D3");
list.insert(3, "newN0DE1");
list.insert(4, "newN0DE2");
list.remove(3);
list.remove(0);
list.reverse();
