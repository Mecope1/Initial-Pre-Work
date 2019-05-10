/*
Challenge 11:
What I learned: I learned how to use the spread operator to make a copy of an array.
*/


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
