"use strict";

// 🔥 TASK 1 ✅✅✅

function sum(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  return function currying(...params) {
    if (params.length >= fn.length) {
      return fn.apply(this, params);
    } else {
      return function (...paramsShort) {
        return currying.apply(this, [...params, ...paramsShort]);
      };
    }
  };
}
