"use strict";

// core function
const calc = function (x) {
  let temp = 1;
  for (let i = 1; i <= x; i++) {
    // console.log(i);
    temp *= i;
  }

  return temp;
};

// calc(5)
// end of core function

const btn = document.querySelector(".btn");
const display = document.querySelector(".display");

btn.addEventListener("click", function () {
  // line 22 (const input ...) was writen in line 16(after comment //end of core ...) (out of this function) and it didn't work properly before. but now it's ok (after writing in function). why?
  //because now it is always getting new value but before it was just empty.what a dump question!
  const input = Number(document.querySelector(".input").value);
  display.textContent = calc(input)
});

console.log(calc(5));
