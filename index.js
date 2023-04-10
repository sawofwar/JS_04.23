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
  if (from === to) return [];
  const result = [];
  switch (from > to) {
    case true:
      console.log("case true");

      array.forEach((element) => {
        if (element >= from && element <= to) {
          result.push(element);
          console.log("pushing");
        }
      });
      break;
    case false:
      if (element <= from && element >= to) {
        result.push(element);
        console.log("pushing");
      }
      break;
  }

  return result;
}

console.log(selectFromInterval([1, 3, 5], 5, 2));
