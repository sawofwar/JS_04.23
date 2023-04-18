"use strict";

class Stack {
  constructor(stackSize) {
    // if (typeof stackSize !== "number") throw new Error("123");
    // if (stackSize === Infinity || -Infinity) throw new Error();
    // if (isNaN(stackSize)) throw new Error();
    // this.stackSize = stackSize;
  }
}

function newStack(number) {
  const stack = new Stack(number);
}

const myStack = new Stack();

// module.exports = Stack;
// module.exports = newStack;
// module.exports = myStack;
module.exports = [Stack, newStack, myStack];
