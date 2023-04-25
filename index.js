"use strict";

class Calculator {
  constructor(currentNumber, previousNumber) {
    this.currentNumber = currentNumber;
    this.previousNumber = previousNumber;
  }
}

// SELECTORS
const inputScreen = document.querySelector(".screen__inner__input");

const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const sign = document.querySelector(".sign");

const greyButtonsNodeList = document.querySelectorAll(".btn--grey");
const greyButtons = Array.from(greyButtonsNodeList);

const orangeButtonsNodeList = document.querySelectorAll(".btn--orange");
const orangeButtons = Array.from(orangeButtonsNodeList);

const greySelectors = {};
greyButtons.forEach((selector) => {
  greySelectors[selector.textContent] = selector;
});

const orangeSelectors = {};
orangeButtons.forEach((selector) => {
  orangeSelectors[selector.textContent] = selector;
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    // 🔥 DEL (BACKSPACE)

    if (e.target.textContent === "Del") {
      const currentInput = inputScreen.textContent.slice(0, -1);
      inputScreen.textContent = currentInput;
    } else if (e.target.textContent === "C") {
      // 🔥 CLEAR ALL

      inputScreen.textContent = "";
    } else if (e.target.textContent === "=") {
    } else {
      // 🔥 NORMAL FUNCTIONALITY

      const targetCharacter = e.target.textContent;
      inputScreen.textContent += targetCharacter;
    }
  }
});

// 🔥 HELPER FUNCTIONS
function add(...args) {
  return args.reduce((accumulator, current) => accumulator + current);
}

console.log(orangeSelectors);
module.exports = Calculator;
