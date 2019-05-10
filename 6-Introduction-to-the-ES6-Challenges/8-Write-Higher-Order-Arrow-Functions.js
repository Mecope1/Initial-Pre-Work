/*
Challenge 8:
What I learned: I learned how to use arrow functions with filter and map functions
*/


const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line


  let squaredIntegers = arr.filter(nums => Number.isInteger(nums) !== false && nums > 0);
  squaredIntegers = squaredIntegers.map(nums => nums**2)
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);