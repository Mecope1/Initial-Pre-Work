/*
Challenge 105:
What I learned: I learned that parseInt() can be given a second argument to allow a string of binary to be changed into
an integer.
*/


function convertToInteger(str) {
  return parseInt(str, 2)
}

console.log(convertToInteger("10011"));
