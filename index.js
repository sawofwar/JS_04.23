"use strict";

// 🔥 TASK 1

Array.prototype.customFilter = function (callbackFn, thisObject) {
  // const filtered = [];
  console.log(this.length);
  this.forEach(() => {
    console.log(this);
  });
};

/*

1. function accepts callback
    a. optional object as 2nd arg that is used as this

2. should work same as .filter()

3. callback gets the same parameters as .filter(): element, index, array

4. function should be a native method of Array

filter creates a shallow copy of a portion of a given array
*/

const testFunction = function () {
  console.log("hi");
};

const callbackFunction = function (element, index, array) {
  console.log("hi");
};

// 🔥 this is how the final version call should look like
// customFilter((element) => {
//   console.log(element);
// });

const testArray = [1, 2, 3];
testArray.customFilter(() => {
  console.log(this);
});
