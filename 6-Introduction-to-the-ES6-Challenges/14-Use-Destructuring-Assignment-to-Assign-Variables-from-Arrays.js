/*
Challenge 14:
What I learned: I learned how to use destructuring assignment to take values from an array and assign them to other
variables.
*/


let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a, b] = [b, a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8