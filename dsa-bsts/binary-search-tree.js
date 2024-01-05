class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if(this.root === null) {
      this.root = newNode;
      return this;
    }
    let curr = this.root;

    while(true) {
      if(val > curr.val) {
        if(curr.right == null) {
          curr.right = newNode;
          return this;
        } else {
          curr = curr.right;
        }
      }
      else if(val < curr.val) {
        if(curr.left == null) {
          curr.left = newNode;
          return this;
        } else {
          curr = curr.left;
        }
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);
    if(this.root === null) {
      this.root = newNode;
      return this;
    }

    function insert_rec(node, currentNode) {
      if(node.val > currentNode.val) {
        if(currentNode.right == null) {
          currentNode.right = node;
        } else {
          insert_rec(node, currentNode.right);
        }
      }
      else if(node.val < currentNode.val) {
        if(currentNode.left == null) {
          currentNode.left = node;
        } else {
          insert_rec(node, currentNode.left);
        }
      }
    }
    insert_rec(newNode, this.root);
    return this;

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(this.root == null) return undefined;

    let curr = this.root;

    while(curr.val != val) {
      if(curr.right == null && curr.left == null) {
        return undefined;
      }
      if(val > curr.val && curr.right != null) {
        curr = curr.right;
      }
      else if(val < curr.val && curr.left != null) {
        curr = curr.left;
      }

    }
    return curr;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if(this.root == null) return undefined;

    function find_rec(curr, val) {
      if(curr.val == val) {
        return curr;
      }
      else {
        if(curr.right == null && curr.left == null) {
          return undefined;
        }
        if(val > curr.val && curr.right != null) {
          return find_rec(curr.right, val);
        }
        else if(val < curr.val && curr.left != null) {
          return find_rec(curr.left, val);
        }
      }
    }
    return find_rec(this.root, val);
  }

  /** dfsPreOrder(): Traverse the tree using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

    function preOrder(node, array) {
      array.push(node.val);
      if (node.left) preOrder(node.left, array);
      if (node.right) preOrder(node.right, array);
      return array;
    }

    return preOrder(this.root, []);

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    function inOrder(node, array) {
      if (node.left) inOrder(node.left, array);
      array.push(node.val);
      if (node.right) inOrder(node.right, array);
      return array;
    }

    return inOrder(this.root, []);


  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    function postOrder(node, array) {
      if (node.left) postOrder(node.left, array);
      if (node.right) postOrder(node.right, array);
      array.push(node.val);
      return array;
    }

    return postOrder(this.root, []);
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = [];
    let result = [];

    queue.push(this.root);
    while(queue.length) {
      let curr = queue.shift();

      result.push(curr.val);
      if(curr.left) queue.push(curr.left);
      if(curr.right) queue.push(curr.right);
    }
    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
