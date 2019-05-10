/*
Challenge 15:
What I learned: I learned how to use the rest operator with destructuring assignment to store un-allocated values. These
values are always from an index "n" to the end of the array. Values can't be picked from throughout the array.
*/


const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a,b,...arr] = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];