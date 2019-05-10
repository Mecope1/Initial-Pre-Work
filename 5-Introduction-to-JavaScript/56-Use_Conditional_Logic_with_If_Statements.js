/*
Challenge 56:
What I learned: I learned how to construct and use an "if" statement.
*/

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue) {
      return "Yes, that was true"
  }
  else if (wasThatTrue === false) {
      return "No, that was false"
  }

  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);