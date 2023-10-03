/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {

      let newVal = new Node(val);
      if(this.size == 0) {
        this.first = newVal;
      }
      else {
        this.last.next = newVal;
      }
      this.last = newVal;
      this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
      if(this.isEmpty()) throw new Error("Error: Attempting to remove from empty queue.");
      else {
        let rVal = this.first.val;
        let newFirst = this.first.next;
        delete this.first;
        this.first = newFirst;
        this.size--;

        return rVal;
      }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.isEmpty()) throw new Error("Error: Attempting to peek from empty queue.");
    else return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
