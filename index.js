"use strict";

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

const testCopy = makeDeepCopy(testObject);

testCopy.b.d.e = "rewritten";
console.log(testObject.b.d.e);
console.log(testCopy.b.d.e);
