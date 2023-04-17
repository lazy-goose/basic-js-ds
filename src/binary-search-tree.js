const { Node } = require('../extensions/list-tree.js')

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  _root = null

  root() {
    return this._root
  }

  add(data) {
    let node = this._root
    if (node === null) {
      this._root = new Node(data)
    } else {
      function recursiveSearchAdd(node) {
        if (data < node.data) {
          return node.left ? recursiveSearchAdd(node.left) : (
            node.left = new Node(data), null
          )
        }
        if (data > node.data) {
          return node.right ? recursiveSearchAdd(node.right) : (
            node.right = new Node(data), null
          )
        }
        if (data === node.data) {
          return null
        }
      }
      recursiveSearchAdd(node)
    }
  }

  has(data) {
    let current = this._root
    while (current) {
      if (data === current.data) {
        return true
      }
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

  find(data) {
    let node = this._root
    while (node.data !== data) {
      if (data < node.data) node = node.left
      if (data > node.data) node = node.right
      if (node === null) return null
    }
    return node
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null
        }
        if (node.left == null) {
          return node.right
        }
        if (node.right == null) {
          return node.left
        }
        let tempNode = node.right
        while (tempNode.left !== null) {
          tempNode = tempNode.left
        }
        node.data = tempNode.data
        node.right = removeNode(node.right, tempNode.data)
        return node
      } else if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else {
        node.right = removeNode(node.right, data)
        return node
      }
    }
    this._root = removeNode(this._root, data)
  }

  min() {
    let current = this._root
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }

  max() {
    let current = this._root
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
}
