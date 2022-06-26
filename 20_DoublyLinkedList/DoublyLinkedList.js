class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adds a node to the end of the DLL.
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // removes the last node from the DLL
  pop() {
    if (!this.head) return null;
    let poppedOffTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedOffTail.prev;
      this.tail.next = null;
      poppedOffTail.prev = null;
    }
    this.length--;
    return poppedOffTail;
  }

  // removes the first node from the DLL
  shift() {
    if (this.length === 0) return null;
    let formerHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = formerHead.next;
      this.head.prev = null;
      formerHead.next = null;
    }
    this.length--;
    return formerHead;
  }

  // adds a node to the beginning of the DLL
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // accesses a node in the DLL at a specific index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let middleOfList = Math.floor(this.length / 2);

    if (index <= middleOfList) {
      let currentNode = this.head;
      let counter = 0;
      while (index !== counter) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    } else {
      let counter = this.length - 1;
      let currentNode = this.tail;
      while (index !== counter) {
        currentNode = currentNode.prev;
        counter--;
      }
      return currentNode;
    }
  }

  // updates the value of a node at a given index
  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }


  // inserts a node at a specific index
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    let newNode = new Node(val);
    let lastNode = this.get(index - 1);
    let nextNode = lastNode.next;

    lastNode.next = newNode;
    newNode.prev = lastNode;

    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }


}

let DLL = new DoublyLinkedList();
DLL.push(53);
DLL.push(41);
DLL.push(22);
DLL.push(35);
DLL.push(16);
DLL.pop();
DLL.pop();
DLL.shift();
DLL.shift();
DLL.unshift(50);
DLL.get(3);
DLL.get(1);
DLL.set(2, 300);
DLL.insert(2, 30);
DLL.insert(3, 13);
