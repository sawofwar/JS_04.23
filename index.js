"use strict";

// SELECTORS
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
  // console.log(e.target.textContent);
  // console.log(e.target.classList);
  if (e.target.classList.contains("btn"))
    console.log("this is a button : ", e.target.textContent);

  // e.target.style.background;
});
