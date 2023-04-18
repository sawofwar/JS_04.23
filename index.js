"use strict";

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
  }

  push(elem) {
    let stackLength = 0;
    for (const element of this.stack) {
      stackLength++;
    }

    if (stackLength >= this.stackSize) throw new Error("Limit exceeded");

    this.stack[stackLength] = elem;
  }

  pop() {
    let stackLength = 0;
    for (const element of this.stack) {
      stackLength++;
    }

    if (stackLength === 0) throw new Error("Empty stack");

    const stackCopy = [...this.stack];
    const result = [];

    const LAST_ELEMENT = stackLength - 1;

    for (let i = 0; i < LAST_ELEMENT; i++) {
      result[i] = this.stack[i];
    }
    this.stack = [...result];

    return stackCopy[LAST_ELEMENT];
  }

  peek() {
    let stackLength = 0;
    for (const element of this.stack) {
      stackLength++;
    }

    if (stackLength === 0) return null;

    const LAST_ELEMENT = stackLength - 1;

    return this.stack[LAST_ELEMENT];
  }

  isEmpty() {
    let stackLength = 0;
    for (const element of this.stack) {
      stackLength++;
    }

    if (stackLength === 0) return true;
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

module.exports = Stack;
