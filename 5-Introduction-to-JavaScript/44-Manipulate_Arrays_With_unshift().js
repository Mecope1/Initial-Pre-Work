/*
Challenge 44:
What I learned: I learned how to use the .unshift() function to add an element to the first position of the array, and
shift the other values forward by one.
*/


// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul", 35]);