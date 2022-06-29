class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // inserting to a max heap
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let childIndex = this.values.length - 1;
    const childNode = this.values[childIndex];

    while (childIndex > 0) {
      let parentIndex = Math.floor((childIndex - 1) / 2);
      let parentNode = this.values[parentIndex];

      if (childNode <= parentNode) break;
      this.values[parentIndex] = childNode;
      this.values[childIndex] = parentNode;
      childIndex = parentIndex;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(11);
heap.insert(30);
heap.insert(14);
heap.insert(99);
heap.insert(10);
