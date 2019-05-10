/*
Challenge 52:
What I learned: I learned how to modify a global variable from inside a function, without using a return statement.
*/


// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5
}


// Only change code above this line
var returnedValue = addFive();
