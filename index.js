"use strict";

// 🔥 TASK 1
// 🔥 helper functions
function isIterable(obj) {
  if (obj === null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === "function";
}

class Stack {
  constructor(stackSize = 10) {
    if (typeof stackSize !== "number") throw new Error("Invalid limit value");
    if (stackSize < 0 || stackSize === 0)
      throw new Error("Invalid limit value");

    if (stackSize % 1 !== 0) throw new Error("Invalid limit value");
    if (stackSize === Infinity || stackSize === -Infinity)
      throw new Error("Invalid limit value");
    if (isNaN(stackSize)) throw new Error("Invalid limit value");

    this.stackSize = stackSize;

    this.stack = [];
    this.stackLength = 0;
  }

  push(elem) {
    if (this.stackLength >= this.stackSize) throw new Error("Limit exceeded");
    this.stack = [...this.stack, elem];
    this.stackLength++;
  }

  pop() {
    if (this.stackLength === 0) throw new Error("Empty stack");

    const getLength = () => {
      let length = 0;

      const recursiveCounter = () => {
        if (this.stack[length] === undefined) return;
        length++;
        recursiveCounter();
      };
      recursiveCounter();

      return length;
    };

    const removeLastElement = () => {
      let length = getLength();
      let increment = 0;
      const result = [];

      const recursivePusher = () => {
        if (increment === length - 1) return;

        result[increment] = this.stack[increment];
        increment++;
        recursivePusher();
        return this.stack[increment];
      };

      const lastElement = recursivePusher();

      this.stack = result;
      return lastElement;
    };

    const lastElement = removeLastElement();
    return lastElement;
    /*
    ✅ let stackLength = 0;
    ✅ for (const element of this.stack) {
      stackLength++;
    }

    ✅ if (stackLength === 0) throw new Error("Empty stack");

    const stackCopy = [...this.stack];
    const result = [];

    ✅ const LAST_ELEMENT = stackLength - 1;


    for (let i = 0; i < LAST_ELEMENT; i++) {
      result[i] = this.stack[i];
    }
    this.stack = [...result];

    return stackCopy[LAST_ELEMENT];
    */
  }

  peek() {
    if (this.stackLength === 0) return null;
    const lastElement = this.stackLength - 1;

    return this.stack[lastElement];
  }

  isEmpty() {
    const getLength = () => {
      let length = 0;

      const recursiveCounter = () => {
        if (this.stack[length] === undefined) return;
        length++;
        recursiveCounter();
      };
      recursiveCounter();

      return length;
    };

    const length = getLength();

    if (length === 0) return true;
    else return false;
  }

  toArray() {
    return [...this.stack];
  }

  static fromIterable(iterable) {
    if (isIterable(iterable) === false) throw new Error("Not iterable");

    let iterableLength = 0;
    for (const element of iterable) {
      iterableLength++;
    }

    const newStack = new Stack(iterableLength);
    newStack.stack = [...iterable];
    return newStack;
  }
}

// 🔥 TASK 2
class LinkedList {
  constructor() {
    this.linkedList = [];
    this.listLength = 0;
  }

  append(elem) {
    this.linkedList = [...this.linkedList, elem];
    this.listLength++;
  }

  prepend(elem) {
    this.linkedList = [elem, ...this.linkedList];
    this.listLength--;
  }

  find(elem) {
    for (const element of this.linkedList) {
      if (element === elem) return element;
    }
    return null;
  }

  static fromIterable(iterable) {
    if (isIterable(iterable) === false) throw new Error("Not iterable");

    let iterableLength = 0;
    for (const element of iterable) {
      iterableLength++;
    }

    const newList = new LinkedList();
    newList.linkedList = [...iterable];
    return newList;
  }
}

try {
  module.exports = Stack;
} catch (error) {}
