"use strict";

/*
нужно делать глубокую копию только обычного объекта, или функция так же должна уметь принимать и копировать массивы?

Массивы в том числе, плюс массивы могут быть вложенными
А в объекте могут быть как массивы так и объекты так и мэпы

*/

function makeDeepCopy(object) {
  if (!object instanceof Object) throw Error("Invalid argument!");

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
