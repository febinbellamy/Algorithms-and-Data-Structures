class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => {
      return v !== v2;
    });

    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => {
      return v !== v1;
    });
  }

  removeVertex(vertex) {
    for (let v of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, v);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstGraphTraversalRecursive(startingNode) {
    let result = [];
    let visitedNodes = {};

    const helperFunc = (vertex) => {
      if (!vertex) return null;
      result.push(vertex);
      visitedNodes[vertex] = true;
      this.adjacencyList[vertex].forEach((vertex) => {
        if (!visitedNodes[vertex]) {
          return helperFunc(vertex);
        }
      });
    };

    helperFunc(startingNode);
    return result;
  }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.removeEdge("A", "B");
graph.removeEdge("B", "C");
graph.removeVertex("A");
graph.removeVertex("D");
graph.depthFirstGraphTraversalRecursive("A");
