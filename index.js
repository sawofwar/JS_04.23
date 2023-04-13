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
function createDebounceFunction(callbackFn, delay) {
  let timer;
  let isAlreadyCalled = true;

  return function () {
    timer = setTimeout(callbackFn, delay);
    isAlreadyCalled && clearTimeout(timer);

    isAlreadyCalled &&= false;
  };
}
