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
    this.lastElement;
  }

  push(elem) {
    if (this.stackLength >= this.stackSize) throw new Error("Limit exceeded");

    this.lastElement = elem;
    this.stack[this.stackLength] = elem;

    this.stackLength++;
  }

  pop() {
    if (this.stackLength === 0) throw new Error("Empty stack");

    // const lastElement = this.stack[this.stackLength - 1];
    let increment = 0;
    const result = this.stack[increment];

    function recursivePop(element) {
      if (element === this.lastElement) console.log("end");
      else {
        result[increment] = this.stack[increment];
        increment++;
        recursivePop(element);
      }
    }
    console.log(result);

    this.stackLength--;

    // const stackCopy = [...this.stack];
    // const result = [];
    // const lastElement = this.stackLength - 1;

    // this.stack = [...result];

    // delete stackCopy[lastElement];
    // console.log(stackCopy);

    // this.stackLength--;
    // return stackCopy[lastElement];
  }

  peek() {
    if (this.stackLength === 0) return null;
    const lastElement = this.stackLength - 1;

    return this.stack[lastElement];
  }

  isEmpty() {
    if (this.stackLength === 0) return true;
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

module.exports = Stack;
