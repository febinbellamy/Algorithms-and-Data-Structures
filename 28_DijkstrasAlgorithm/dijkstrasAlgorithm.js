class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vtx) {
    if (!this.adjacencyList[vtx]) {
      this.adjacencyList[vtx] = [];
    }
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
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

  Dijkstra(startingV, finish) {
    let nodes = new PriorityQueue();
    let previous = {};
    let distances = {};
    let path = [];
    let smallest;

    for (let vertex in this.adjacencyList) {
      if (vertex === startingV) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;

          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate;
            previous[nextNode.node] = smallest;
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E"));
