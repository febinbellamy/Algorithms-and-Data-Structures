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

  // removing from a max heap
  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
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
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(11);
heap.insert(30);
heap.insert(14);
heap.insert(99);
heap.insert(10);
heap.extractMax();
