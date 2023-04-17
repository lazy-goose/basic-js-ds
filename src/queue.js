const { ListNode } = require('../extensions/list-node.js')

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  head = null
  tail = null

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    let insertNode = new ListNode(value)
    if (!this.head) {
      this.head = insertNode
      this.tail = insertNode
    } else {
      this.tail.next = insertNode
      this.tail = insertNode
    }
  }

  dequeue() {
    let deleteNode = this.head
    if (deleteNode) {
      this.head = deleteNode.next
      return deleteNode.value
    }
  }
}

module.exports = {
  Queue
}
