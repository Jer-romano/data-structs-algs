/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root) return 0;

    let depth = 1;
    const queue = [this.root];

    while(queue.length) {
      const levelSize = queue.length;

      for(let i = 0; i < levelSize; i++) {
        const current = queue.shift();

        if(!current.left && !current.right) {
          return depth;
        }

        if(current.left) {
          queue.push(current.left);
        }
        if(current.right) {
          queue.push(current.right);
        }
      }
      depth++;
    }

    // let min = Number.MAX_VALUE;
    // let toVisitStack = [[this.root, 1]];

    // while(toVisitStack.length) {
    //   let currentArray = toVisitStack.pop();
    //   let current = currentArray[0]
    //   let currDepth = currentArray[1];
    //   if(current.left == null && current.right == null) {
    //     if(currDepth < min) {
    //       min = currDepth;
    //     }
    //   }
    //   else {
    //     if(current.left) {
    //       toVisitStack.push([current.left, currDepth+1]);
    //     }
    //     if(current.right) {
    //       toVisitStack.push([current.right, currDepth+1]);
    //     }
    //   }
  
    // }
    // return min;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root) return 0;

    let max = 0;
    let toVisitStack = [[this.root, 1]];

    while(toVisitStack.length) {
      let currentArray = toVisitStack.pop();
      let current = currentArray[0]
      let currDepth = currentArray[1];
      if(current.left == null && current.right == null) {
        if(currDepth > max) {
          max = currDepth;
        }
      }
      else {
        if(current.left) {
          toVisitStack.push([current.left, currDepth+1]);
        }
        if(current.right) {
          toVisitStack.push([current.right, currDepth+1]);
        }
      }
  
    }
    return max;

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if(!this.root) return 0;
    /**
     * Start at root. Check if adding children will create a larger sum. if so, update sum. 
     */
    //let res = this.root.val;
  
    function dfs(node) {
      if(!node) return 0;

      let leftMax = dfs(node.left);
      let rightMax = dfs(node.right);

      leftMax = Math.max(leftMax, 0);
      rightMax = Math.max(rightMax, 0);
      //This finds the max sum without a "split". The tests appear to be expecting a max sum with a 
      //split, despite there being no mention of this in the instructions.
      return node.val + Math.max(leftMax, rightMax);
      //return Math.max(res, node.val + leftMax + rightMax);
    }

    return dfs(this.root);
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) return null;

    let smallest = Number.MAX_VALUE;
    const queue = [this.root];

    while(queue.length) {
      const levelSize = queue.length;

      for(let i = 0; i < levelSize; i++) {
        const current = queue.shift();
        if(current.val > lowerBound && current.val < smallest) {
          smallest = current.val;
        }

        if(current.left) {
          queue.push(current.left);
        }
        if(current.right) {
          queue.push(current.right);
        }
      }
    }
    if(smallest == Number.MAX_VALUE) {
      return null;
    } 
    else return smallest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
