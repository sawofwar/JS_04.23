"use strict";

function makeDeepCopy(object) {
  // 1. accept object, return copy
  // 2. if argument isn't object, throw error

  return Object.assign({}, object);
}

makeDeepCopy();
