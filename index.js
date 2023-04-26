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
  if (e.target.hasAttribute("data-number")) {
    calculator.appendNumber(e.target.innerText);
    calculator.updateDisplay();

    console.log(calculator.currentNumber);
  }
});

clearButton.addEventListener("click", (e) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (e) => {
  calculator.delete();
  calculator.updateDisplay();
});
