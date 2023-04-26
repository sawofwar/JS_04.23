"use strict";

/*
✅ clear button
sign button
✅ del button
/ button
*
-
+
=

✅ number buttons
*/

export class Calculator {
  constructor(currentNumber, previousNumber) {
    this.currentNumber = currentNumber;
    this.previousNumber = previousNumber;

    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  toggleSign() {
    this.currentOperand = this.currentOperand * -1;
    console.log(this.currentOperand);
    this.updateDisplay();
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentNumber.includes(".")) return;

    this.currentOperand = this.currentOperand + "" + (number + "");
  }

  chooseOperation(operation) {}

  compute() {}

  getDisplayNumber(number) {}

  updateDisplay() {
    this.currentNumber.innerText = `${this.currentOperand}`;
    console.log(this.currentNumber.innerText);
  }
}

// 🔥 SELECTORS
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-clear]");
const signButton = document.querySelector("[data-sign]");

const currentNumber = document.querySelector("[data-current-operand]");
const previousNumber = document.querySelector("[data-previous-operand]");

const calculator = new Calculator(currentNumber, previousNumber);

/*
numberButtons.forEach(button => {
  button.addEventListener
})
*/

window.addEventListener("click", (e) => {
  const hasDataNumber = e.target.hasAttribute("data-number");
  const hasDataDelete = e.target.hasAttribute("data-delete");
  const hasDataClear = e.target.hasAttribute("data-delete");
  const hasDataSign = e.target.hasAttribute("data-sign");

  if (hasDataNumber) {
    calculator.appendNumber(e.target.innerText);
    calculator.updateDisplay();
  } else if (hasDataDelete) {
    calculator.delete();
    calculator.updateDisplay();
  }
});

clearButton.addEventListener("click", (e) => {
  calculator.clear();
  calculator.updateDisplay();
});

// deleteButton.addEventListener("click", (e) => {
//   calculator.delete();
//   calculator.updateDisplay();
// });

signButton.addEventListener("click", (e) => {
  calculator.toggleSign();
  calculator.updateDisplay();
});
