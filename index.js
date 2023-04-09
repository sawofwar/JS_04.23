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
  for (const property in object) {
    if (typeof object[property] === "object" && object[property] !== null) {
      clone[property] = makeDeepCopy(object[property]);
    } else {
      clone[property] = object[property];
    }
  }

  return clone;
}

const testObject = {
  a: 123,
  b: {
    c: [1, 2, 3],
    d: {
      e: "test",
      f: {
        g: "test string",
        h: [
          1,
          2,
          3,
          {
            i: "test string 2",
            j: true,
          },
        ],
      },
    },
  },
};

const testObject2 = {
  a: "b",
  b: {
    d: "e",
    c: false,
  },
};

const testObject3 = {
  a: "b",
  b: {
    c: false,
    d: {
      e: "test string",
      f: 123,
    },
  },
};

// array for testing
const testArray = [1, , "abc", [true, { a: 99, b: "hello" }]];

const testMap = new Map([
  ["test", true],
  ["b", 123],
  [
    "testObject",
    {
      a: "j",
      b: 2394,
      c: false,
    },
  ],
]);

const testCopy = makeDeepCopy(testObject);
const testCopyMap = makeDeepCopy(testArray);

const testArrayCopy = makeDeepCopy(testArray);
console.log(testArrayCopy);

testArrayCopy[3][1].b = "jsjsj";

// testArray[3][1].b = "jsjsj";
console.log(`Original array prop: ${testArray[3][1].b}`);
console.log(`Copy array prop rewritten: ${testArrayCopy[3][1].b}`);

testCopy.b.d.e = "rewritten";
console.log(testObject.b.d.e);
console.log(testCopy.b.d.e);
