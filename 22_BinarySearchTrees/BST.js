class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Inserts a value in its correct position in the tree
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}
