"use strict";

// 🔥 TASK 1
// TODO: check if empty error works in TASK 1
// old code:
/*
function makeDeepCopy(object) {
  if (!(object instanceof Object)) throw Error();

  // two cases: (1) array and (2) object
  // 1. check if "object" is actually an array
  if (object instanceof Array) {
    return object.map((element) => {
      // a) if object not primitive => re-run the function
      if (typeof element === "object") {
        return makeDeepCopy(element);

        // b) otherwise return element
      } else {
        return element;
      }
    });
  }

  // 2. if "object" is an object
  const clone = {};
  for (const property in object) {
    // a) check map first because it's an object too
    if (object[property] instanceof Map) {
      clone[property] = new Map(object[property]);

      // b) if this is a normal object => re-run the function
    } else if (
      typeof object[property] === "object" &&
      object[property] !== null
    ) {
      clone[property] = makeDeepCopy(object[property]);

      // c) otherwies just return property
    } else {
      clone[property] = object[property];
    }
  }

  return clone;
}
*/

// 🔥 TASK 2
function selectFromInterval([...array], from, to) {
  // 1. check "from" and "to"
  if (
    typeof from !== "number" ||
    Number.isNaN(from) ||
    !Number.isFinite(from) ||
    typeof to !== "number" ||
    Number.isNaN(to) ||
    !Number.isFinite(to)
  )
    throw Error();

  // 2. check array
  array.forEach((element) => {
    if (
      typeof element !== "number" ||
      Number.isNaN(element) ||
      !Number.isFinite(element)
    )
      throw Error();
  });

  // 3. main code
  if (from === to) return [];
  const result = [];

  switch (to > from) {
    case true:
      array.forEach((element) => {
        if (element >= from && element <= to) result.push(element);
      });
      break;

    case false:
      array.forEach((element) => {
        if (element <= from && element >= to) result.push(element);
      });
      break;
  }
  return result;
}

console.log(selectFromInterval([1, 3, 5], 5, 2)); // [3, 2] -- correct
console.log(selectFromInterval([-2, -15, 0, 4], -13, -5));
console.log(selectFromInterval([1, 20, 40, -1, 0, 11], -2, 5));
console.log(selectFromInterval(true, 2, 3));
