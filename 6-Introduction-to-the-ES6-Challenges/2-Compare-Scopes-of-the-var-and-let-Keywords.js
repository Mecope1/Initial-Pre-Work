/*
Challenge 2:
What I learned: I learned how to use the let keyword to define a variable only inside a single scope.
*/


function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
