/*
Challenge 50:
What I learned: I learned that variables that are defined inside a function will take precedence over global variables
of the same name while inside that function. They will not overwrite that global declaration however. This means that
once outside the function's scope, that the global value will be used.
*/


// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();