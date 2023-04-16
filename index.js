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

  _setX(num) {
    // check number
    if (typeof num !== "number") throw new Error();
    // check infinity
    if (Math.abs(num) === Infinity) throw new Error();
    // check NaN
    if (isNaN(num)) throw new Error();

    this.x = num;
  }

  _setY(num) {
    // check number
    if (typeof num !== "number") throw new Error();
    // check infinity
    if (Math.abs(num) === Infinity) throw new Error();
    // check NaN
    if (isNaN(num)) throw new Error();

    this.y = num;
  }

  _getSum() {
    return this.x + this.y;
  }

  _getMul() {
    return this.x * this.y;
  }

  _getSub() {
    return Math.abs(this.x - this.y);
  }

  _getDiv() {
    // check if y is 0
    if (this.y == 0) throw new Error();
    return this.x / this.y;
  }

  get setX() {
    return this._setX.bind(this);
  }

  get setY() {
    return this._setY.bind(this);
  }

  get getSum() {
    return this._getSum.bind(this);
  }

  get getMul() {
    return this._getMul.bind(this);
  }

  get getSub() {
    return this._getSub.bind(this);
  }

  get getDiv() {
    return this._getDiv.bind(this);
  }
}
