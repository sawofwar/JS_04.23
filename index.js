"use strict";

// using the operand selectors to know where to store that stuff

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;

    // 🔥 sett all to default when calculator is created
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

  // 🔥 whenever user clicks, this fires
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;

    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  // whenever use clicks on one of the operations
  chooseOperation(operation) {
    // if we already have an operation, prevent it from executing
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }

    // current number is brought into the previous operand value
    this.operation = operation;
    this.previousOperand = this.currentOperand;

    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand); // converting previous operand to number
    const current = parseFloat(this.currentOperand); // converting previous operand to number

    // checking if nothing is on screen
    if (isNaN(prev) || isNaN(current)) return;
    // cases on this object
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      // 🔥🔥🔥 else-like statement: executed if no match
      default:
        return;
    }

    this.currentOperand = computation;
    // reset rest of calculator
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    // OLD CODE:
    /*
    // convert string argument to actual number
    const floatNumber = parseFloat(number);
    if (isNaN(floatNumber)) return "";

    // localising number
    return floatNumber.toLocale("en");
    */

    // split number into decimal place and actual number
    // toString to split the float
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")); // get first part
    const decimalDigits = stringNumber.split(".")[1];

    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );

    // adding operation symbol
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}

// SELECTORS
// 🔥 so as not to mix css selectors with javascript stuff, we use "data" attributes

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

/*
plan:
1. how to store what is in the calculator? -- use class
2. thinks about all operations the calculator needs to perform
  a. define operations in class

3. think about what calculator needs to store:
  a. both operands
  b. if any, operation selected
  c. when calculator is opened, it should be cleared -- write clear() logic

4. now appendNumber is working, we can update its logic
5. now appendNumber is updated, we want the full stop button to work only once 
*/

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
