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
