/*
Challenge 1:
What I learned: I learned about using the keyword let to make a variable only able to be declared once. It is not
immutable.
*/


let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();