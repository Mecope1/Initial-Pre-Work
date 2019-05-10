/*
Challenge 18:
What I learned:  I learned how to write object literal declarations using simple fields to be as concise as possible.
*/


const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return ({
    name,
    age,
    gender
    });
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object