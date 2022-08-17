class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdges(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return;
        }
        for (let adjacenVertex in this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacenVertex);
        }
        delete this.adjacencyList[vertex];
    }

    hasEdges(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    display() {
        for (let vertix in this.adjacencyList) {
            console.log(`${vertix} => ${[...this.adjacencyList[vertix]]}`)
        }
    }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdges("A", "B");
graph.addEdges("B", "C");

graph.display();

console.log(graph.hasEdges("A", "B"));
console.log(graph.hasEdges("A", "C"));

console.log('------');

graph.removeEdge("A", "B");

graph.display();

console.log('------');

graph.removeVertex("A");

graph.display();