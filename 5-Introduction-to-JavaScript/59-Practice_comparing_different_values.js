/*
Challenge 59:
What I learned: I learned more about how the strict and unstrict equality operators work.
*/


// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");