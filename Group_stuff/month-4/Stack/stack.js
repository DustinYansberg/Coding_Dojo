/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
  /**
   * The constructor is executed when instantiating a new Stack() to construct
   * a new instance.
   * @returns {Stack} This new Stack instance is returned without having to
   *    explicitly write 'return' (implicit return).
   */
  constructor() {
    this.items = [];
  }

  /**
   * Adds a new given item to the top / back of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top / back.
   * @returns {number} The new length of this stack.
   */
  push(item) {
    const length = this.items.length;
    this.items[length] = item;
    return this.items.length;
  }

  /**
   * Removes the top / last item from this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The removed item or undefined if this stack was empty.
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    let poppedElement = this.items[this.items.length - 1];
    this.items.length--;
    return poppedElement;
  }

  /**
   * Retrieves the top / last item from this stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The top / last item of this stack.
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  /**
   * Returns whether or not this stack is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    return this.items.length < 1;
  }

  /**
   * Returns the size of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {
    return this.items.length;
  }
}

class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  /**
   * Adds a new given item to the top / back of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top / back.
   * @returns {number} The new length of this stack.
   */
  push(item) {
    let newNode = new StackNode(item);
    let length = 1;

    if (this.isEmpty()) {
      this.head = newNode;
      return length;
    }
    let runner = this.head;
    while (runner.next) {
      runner = runner.next;
      length++;
    }
    length++;
    runner.next = newNode;
    return length;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    let runner = this.head;

    while (runner.next.next) {
      runner = runner.next;
    }
    let res = runner.next;
    runner.next = null;
    return res.data;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    let runner = this.head;
    while (runner.next) {
      runner = runner.next;
    }
    return runner.data;
  }

  print() {
    let res = [];
    if (this.isEmpty()) {
      return res;
    }
    let runner = this.head;
    while (runner) {
      res.push(runner.data);
      runner = runner.next;
    }
    return res;
  }
}

modules.export = { Stack, LinkedListStack };
