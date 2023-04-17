const { List } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, removeValue) {
  let head = list
  let curr = list
  let prev = null

  while (curr) {
    if (curr.value === removeValue) {
      if (prev) {
        prev.next = curr.next
        curr = prev
      } else {
        head = curr.next
      }
    }

    prev = curr
    curr = curr.next
  }

  return head
}

module.exports = {
  removeKFromList
}
