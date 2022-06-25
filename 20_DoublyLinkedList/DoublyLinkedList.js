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
DLL.unshift(20);
DLL.unshift(50);
DLL.unshift(18);
DLL.unshift(94);
