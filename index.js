"use strict";

// 🔥 TASK 1
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

// 🔥 TASK 3
class RickAndMorty {
  constructor() {}

  getCharacter(id) {
    if (!isFinite(id)) throw new Error();
    if (id === null) throw new Error();
    if (id < 0) throw new Error();
    // if (id > 826) throw new Error();

    const floored = Math.floor(id);

    const character = fetch(
      `https://rickandmortyapi.com/api/character/${floored}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        } else {
          return res.json();
        }
      })
      .then((data) => {
        if (data.error && data.error.toLowerCase() === "character not found")
          return null;

        return data;
      })
      .catch((error) => {
        return null;
      });

    return character;
  }

  async getEpisode(id) {
    try {
      if (!isFinite(id)) throw new Error();
      if (id === null) throw new Error();
      if (id < 0) throw new Error();
      // if (id > 51) throw new Error();

      const floored = Math.floor(id);

      const res = await fetch(
        `https://rickandmortyapi.com/api/episode/${floored}`
      );
      const data = await res.json();

      if (data.error && data.error.toLowerCase() === "episode not found")
        return null;

      if (!res.ok) throw new Error();

      return data;
    } catch (error) {
      return null;
    }
  }
}

const rick = new RickAndMorty();
console.log(rick.getEpisode(11));

async function testMethod() {
  const character = await rick.getCharacter(123);
  console.log(character);

  const episode = await rick.getEpisode(23);
  console.log(episode);
}

testMethod();

// убрал проверку id > 826 & id > 51
// добавил return
