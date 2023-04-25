"use strict";

// SELECTORS
const inputScreen = document.querySelector(".screen__inner__input");

const greyButtonsNodeList = document.querySelectorAll(".btn--grey");
const greyButtons = Array.from(greyButtonsNodeList);

const orangeButtonsNodeList = document.querySelectorAll(".btn--orange");
const orangeButtons = Array.from(orangeButtonsNodeList);

// console.log(greyButtons.at(2).textContent);
// key -- digit, value -- selector
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
    console.log("this is a button : ", e.target.textContent);

    const targetCharacter = e.target.textContent;
    inputScreen.textContent += targetCharacter;
  }
});
