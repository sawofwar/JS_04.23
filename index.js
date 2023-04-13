"use strict";

// 🔥 TASK 1
Array.prototype.customFilter = function (callbackFn, thisObject) {
  const filteredArray = [];

  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    const index = i;
    const array = this;

    if (callbackFn.call(thisObject, element, index, array))
      filteredArray.push(element);
  }

  return filteredArray;
};

// 🔥 TASK 2
/*
1st call: counter = 1000 --> alreadyCalled is false --> timer started
2nd call: counter = 1000 --> alreadyCalled is true --> timer cancelled
*/

function createDebounceFunction(callbackFn, delay) {
  let timer;
  let isAlreadyCalled = true;

  return function () {
    timer = setTimeout(callbackFn, delay);
    isAlreadyCalled && clearTimeout(timer);

    isAlreadyCalled &&= false;
  };
}

/*
const testFunction = function () {
  console.log("hi from test function");
};

const testFunctionDebounce = createDebounceFunction(testFunction, 1000); // 1 sec

testFunctionDebounce();
testFunctionDebounce();
setTimeout(testFunctionDebounce, 5000); // 3 sec

// ??? called after 4 sec

console.log("0 seconds");
setTimeout(() => console.log("1 second"), 999);
setTimeout(() => console.log("2 seconds"), 1999);
setTimeout(() => console.log("3 seconds"), 2999);
setTimeout(() => console.log("4 seconds"), 3999);
setTimeout(() => console.log("5 seconds"), 4999);
setTimeout(() => console.log("6 seconds"), 5999);
setTimeout(() => console.log("7 seconds"), 6999);
setTimeout(() => console.log("8 seconds"), 7999);
setTimeout(() => console.log("9 seconds"), 8999);
setTimeout(() => console.log("10 seconds"), 9999);
*/
