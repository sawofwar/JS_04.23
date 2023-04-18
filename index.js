"use strict";

// 🔥 TODO: ask Samir if push(elem) should return the added element

/*
class Stack ✅ -- stack data structure
optional parameter -- number (max number of elements in stack) ✅
if parameter invalid, throw error ✅
if parameter not set, default value = 10 ✅

public methods:
push(elem) -- add new elem to stack ✅
error if stack is full

pop() -- remove top stack element
return removed element

peek() -- return top element from stack
return null if stack is empty

isEmpty() -- return boolean (is empty or not)

toArray() -- return array containing stack elements
just elements, not the whole data structure
empty array if stack is empty
use cycle for iterating stack elements
use array methods only for adding elements to the new array
*/

class Stack {
  constructor(stackSize = 10) {
    if (typeof stackSize !== "number") throw new Error();
    if (stackSize === Infinity || stackSize === -Infinity) throw new Error();
    if (isNaN(stackSize)) throw new Error();

    this.stackSize = stackSize;
    this.stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  }

  push(elem) {
    // ✨ stack length logic
    let stackLength = 0;
    for (const element of this.stack) {
      stackLength++;
    }

    // ✨ add element
    this.stack[stackLength] = elem;
  }

  pop(elem) {
    // ✨ logic for stack length
    let stackLength = 0;
    for (const element of this.stack) {
      stackLength++;
    }

    // ✨ temp copy & array to push results
    const stackCopy = [...this.stack];
    const result = [];

    // ✨ index for the loop below & for returning popped element
    const LAST_ELEMENT = stackLength - 1;

    // ✨ construct result for updating this.stack
    for (let i = 0; i < LAST_ELEMENT; i++) {
      result[i] = this.stack[i];
    }
    this.stack = [...result];

    // ✨ return popped element
    return stackCopy[LAST_ELEMENT];
  }
}

const stack = new Stack();
stack.push(14);
// console.log(stack.pop());
console.log(stack);

/*
const invalidNumbers = [Infinity, -Infinity, NaN];
for (const number of invalidNumbers) {
  new Stack(number);
}
*/

// console.log(stack);
// console.log(stackTwenty);
