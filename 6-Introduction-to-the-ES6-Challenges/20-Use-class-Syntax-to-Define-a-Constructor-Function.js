/*
Challenge 20:
What I learned: I learned how to create a class. I also learned that it is different from Python classes as it is only
a syntax and not a complete implementation of classes like what is seen in an object oriented paradigm.
*/


function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'