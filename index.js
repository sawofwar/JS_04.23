"use strict";

function makeDeepCopy(object) {
  // 1. accept object, return copy
  // 2. if argument isn't object, throw error

  return Object.assign({}, object);
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

const testCopy = makeDeepCopy(testObject);
console.log(testCopy);

testCopy.b.d.e = "rewritten";
console.log(testCopy.b.d.e);
console.log(testObject.b.d.e);
