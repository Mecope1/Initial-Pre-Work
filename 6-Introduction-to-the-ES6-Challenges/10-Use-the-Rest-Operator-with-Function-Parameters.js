/*
Challenge 10:
What I learned: I learned how to use the spread operator to allow a function to be given a dynamic number of variables
*/


const sum = (function() {
  "use strict";
  return function sum(...args) {
    const blargs = [...args];
    return blargs.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6