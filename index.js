"use strict";

class Calculator {
  constructor(currentNumber, previousNumber) {
    this.currentNumber = currentNumber;
    this.previousNumber = previousNumber;
  }
}

// 🔥 SELECTORS
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-clear]");
const signButton = document.querySelector("[data-sign]");

const currentOperand = document.querySelector("[data-current-operand]");
const previousOperand = document.querySelector("[data-previous-operand]");
