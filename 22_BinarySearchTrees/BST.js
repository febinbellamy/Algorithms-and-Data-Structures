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

  // Searches for a specific value in the tree
  find(val) {
    if (this.root === null) return false;
    let current = this.root;
    while (current !== null) {
      if (current.val === val) {
        return true;
      } else if (val > current.val) {
        current = current.right;
      } else if (val < current.val) {
        current = current.left;
      }
    }
    return false;
  }

  // Breadth-First Search
  BFS() {
    let node = this.root;
    let visitedNodes = [];
    let queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visitedNodes.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visitedNodes;
  }

  // Depth-First Search Preorder
  DFSPreOrder() {
    let visitedNodes = [];
    function helperFunc(node) {
      visitedNodes.push(node.val);
      if (node.left) helperFunc(node.left);
      if (node.right) helperFunc(node.right);
    }
    helperFunc(this.root);
    return visitedNodes;
  }

  // Depth-First Search Postorder
  DFSPostOrder() {
    let visitedNodes = [];
    function helperFunc(node) {
      if (node.left) helperFunc(node.left);
      if (node.right) helperFunc(node.right);
      visitedNodes.push(node.val);
    }
    helperFunc(this.root);
    return visitedNodes;
  }

  // Depth-First Search Inorder
  DFSInOrder() {
    let visitedNodes = [];
    function helperFunc(node) {
      if (node.left) helperFunc(node.left);
      visitedNodes.push(node.val);
      if (node.right) helperFunc(node.right);
    }
    helperFunc(this.root);
    return visitedNodes;
  }

  

}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(16);
tree.insert(7);
tree.find(5);
tree.find(1);
tree.BFS();
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();
