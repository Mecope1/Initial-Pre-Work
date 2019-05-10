/*
Challenge 49:
What I learned: I learned more about how function scope works with variables.
*/


function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 10;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
