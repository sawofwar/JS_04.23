"use strict";

/*
нужно делать глубокую копию только обычного объекта, или функция так же должна уметь принимать и копировать массивы?

Массивы в том числе, плюс массивы могут быть вложенными
А в объекте могут быть как массивы так и объекты так и мэпы

*/

function makeDeepCopy(object) {
  // 2. if argument isn't object, throw error

  // 1. accept object, return copy

  const clone = {};

  // looping through object props
  for (const property in object) {
    // if property is object & if it's not null, do a recursion

    // console.log("Property is object : ", object[property]);

    if (object[property] instanceof Map) {
      clone[property] = new Map(object[property]);
    } else if (
      typeof object[property] === "object" &&
      object[property] !== null
    ) {
      clone[property] = makeDeepCopy(object[property]);
    } else {
      clone[property] = object[property];
    }
  }

  return clone;
}

const testObject = {
  a: true,
  b: {
    c: new Map([
      [1, true],
      [[2, 3, 4], "test string"],
    ]),
  },
};

const copy = makeDeepCopy(testObject);

console.log("Copy : ", copy.b);
console.log("Original object : ", testObject.b);
