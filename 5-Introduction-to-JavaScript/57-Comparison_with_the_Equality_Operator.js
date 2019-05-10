/*
Challenge 57:
What I learned: I learned how to use the equality operator ==. This operator will perform type conversions to test
equality. This means that a string '3' will be found equal to an int 3.
*/


// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
