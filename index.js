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

// 🔥 TASK 2

/*
Calculator class

constructor accepts two valid numbers (integers & floats);
if one of the parameters is invalid, throw new Error

class has methods:
setX
setY
getSum
getMul
getSub
getDiv


setX -- first number
*/

class Calculator {
  constructor(x, y) {
    // check number
    if (typeof x !== "number" || typeof y !== "number") throw new Error();
    // check infinity
    if (Math.abs(x) === Infinity || Math.abs(y) === Infinity) throw new Error();
    // check NaN
    if (isNaN(x) || isNaN(y)) throw new Error();

    this.x = x;
    this.y = y;
  }

  setX(num) {
    // check number
    if (typeof num !== "number") throw new Error();
    // check infinity
    if (Math.abs(num) === Infinity) throw new Error();
    // check NaN
    if (isNaN(num)) throw new Error();

    this.x = num;
  }
  setY(num) {
    // check number
    if (typeof num !== "number") throw new Error();
    // check infinity
    if (Math.abs(num) === Infinity) throw new Error();
    // check NaN
    if (isNaN(num)) throw new Error();

    this.y = num;
  }

  getSum() {
    return this.x + this.y;
  }

  getMul() {
    return this.x * this.y;
  }

  getSub() {
    return Math.abs(this.x - this.y);
  }

  getDiv() {
    if (this.y == 0) throw new Error();

    return this.x / this.y;
  }
}

const myCalculator = new Calculator(10, 10);
console.log(myCalculator.setX(10));
console.log(myCalculator.x);

// myCalculator.setX();
// console.log(!!0);

/*
string
number
boolean
undefined
null
bigInt
symbsols

array
object
function/class
map
set

*/
