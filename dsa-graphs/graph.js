class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let v of vertexArray) {
      this.nodes.add(v);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);

    for(let node of this.nodes) {
      if(node.adjacent.has(vertex)) {
        node.adjacent.delete(vertex);
      }
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let seen = new Set();
    let result = [];
    let toVisit = [start];

    while(toVisit.length) {

      let curr = toVisit.pop();
      if(!seen.has(curr)) {
        result.push(curr.value);
        seen.add(curr);

        for(let node of curr.adjacent) {
          toVisit.push(node);
        }
      }
    }
    return result;
   
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let seen = new Set();
    let result = [];
    let toVisit = [start];

    while(toVisit.length) {

      let curr = toVisit.shift();
      if(!seen.has(curr)) {
        result.push(curr.value);
        seen.add(curr);

        for(let node of curr.adjacent) {
          toVisit.push(node);
        }
      }
    }
    return result;
  }
}

module.exports = {Graph, Node}