/*
Challenge 4:
What I learned: I learned that arrays declared with const can't be reassigned to a new array or value, but can have
their elements changed.
*/


const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  const myArr = [2, 5, 7];
  for (let i = 0; i<3; i++){
    s[i]=myArr[i]
  }
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();