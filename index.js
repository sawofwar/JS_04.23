"use strict";

// 🔥 TASK 1
// 🔥 TODO: ask if logging this should happen on each iteration or just once
// TODO: ask if it's okay if arrow function points to window
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

// 🔥 random tests
/*
const testFunction = function () {
  console.log("hi");
};

const callbackFunction = function (element, index, array) {
  console.log("hi");
};

const testArray = [1, 2, 3, 4, 5];

const filteredTestArray = testArray.customFilter(testFunction, {
  name: "constantine",
  age: 27,
  hasGf: true,
});
console.log(filteredTestArray);
*/
