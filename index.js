"use strict";

// 🔥 TASK 1
// TODO: if nothing is entered, program interprets it as 0 and keeps working
function getFactorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}

function getPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function getDelimiters(number) {
  const delimiters = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      delimiters.push(i);
    }
  }
  delimiters.sort((a, b) => b - a);
  return delimiters;
}

(function main() {
  const inputNumber = +prompt("Type in a positive integer:");

  // 1. check if input is valid
  if (
    !Number.isInteger(inputNumber) ||
    inputNumber % 1 !== 0 ||
    inputNumber < 0
  ) {
    console.log("Incorrect input: Please provide a positive integer.");
    return main();

    // 2. main functionality
  } else {
    const factorial = getFactorial(inputNumber);
    const square = inputNumber * inputNumber;
    const isPrime = getPrime(inputNumber);
    const isEven = !(inputNumber % 2);
    const delimiters = getDelimiters(inputNumber);

    console.log(`Number: ${inputNumber}`);
    console.log(`Factorial: ${factorial}`);
    console.log(`Square: ${square}`);
    console.log(`isPrime: ${isPrime}`);
    console.log(`isEven: ${isEven}`);
    console.log(`Delimiters: ${delimiters}`);
  }
})();

// 🔥 TASK 2
// TODO: if three spaces are entered, the program works (should throw error or something)
function generateRow(string, number) {
  let row = "";
  for (let i = 0; i < number; i++) {
    if (i < number - 1) {
      row += string + " ";
    } else {
      row += string;
    }
  }
  return row;
}

function generateOutput(row, number) {
  let output = [];
  for (let i = 0; i < number; i++) {
    output.push(row);
  }
  return output.join("\n");
}

(function main2() {
  const inputString = prompt(
    "Type in a string with a length of 1 to 3 characters:"
  );

  // check string
  if (
    inputString.length < 1 ||
    inputString.length > 3 ||
    inputString === " " ||
    inputString === ""
  ) {
    console.log("Incorrect input! Try again.");
    return main2();
  } else {
    const inputNumber2 = +prompt(
      "Type in a positive integer higher than 0 and less than 10:"
    );

    // check number
    if (
      !Number.isInteger(inputNumber2) ||
      inputNumber2 < 1 ||
      inputNumber2 > 10
    ) {
      console.log("Incorrect input! Try again.");
      return main2();
    } else {
      let row = generateRow(inputString, inputNumber2);
      let output = generateOutput(row, inputNumber2);
      console.log(output);
    }
  }
})();
