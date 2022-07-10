class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // adds a new node to the heap
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let childIndex = this.values.length - 1;
    const childNode = this.values[childIndex];

    while (childIndex > 0) {
      let parentIndex = Math.floor((childIndex - 1) / 2);
      let parentNode = this.values[parentIndex];

      if (childNode.priority >= parentNode.priority) break;
      this.values[parentIndex] = childNode;
      this.values[childIndex] = parentNode;
      childIndex = parentIndex;
    }
  }

  //returns the value with the lowest priority
  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let index = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild;
      let rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let EmergencyRoom = new PriorityQueue();
EmergencyRoom.enqueue("Strep throat", 3);
EmergencyRoom.enqueue("Flu", 2);
EmergencyRoom.enqueue("Broken ribs", 1);
EmergencyRoom.enqueue("Gunshot wound", 5);
EmergencyRoom.dequeue();
EmergencyRoom.dequeue();
EmergencyRoom.dequeue();
