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

}

let DLL = new DoublyLinkedList();
DLL.push(53);
DLL.push(41);
DLL.push(22);
DLL.pop();
