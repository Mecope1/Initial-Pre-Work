/*
Challenge 58:
What I learned: I learned how to use the strict equality operator ===. This operator does not perform any type
conversion.
*/



// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);