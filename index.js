"use strict";

export class Calculator {
  constructor(currentNumber, previousNumber) {
    this.currentNumber = currentNumber;
    this.previousNumber = previousNumber;
  }

  clear() {}

  delete() {}

  appendNumber(number) {}

  chooseOperation(operation) {}

  compute()

  getDisplayNumber(number) {}

  updateDisplay() {}
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

const calculator = new Calculator(currentOperand, previousOperand);
