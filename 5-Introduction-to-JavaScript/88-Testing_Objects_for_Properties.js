/*
Challenge 88:
What I learned: I learned how to test an object to see if it has a property.
*/


// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  var returnVal
  if(myObj.hasOwnProperty(checkProp)){
    returnVal = myObj[checkProp]
  }
  else {
    returnVal = "Not Found"
  }
  return returnVal
}
// Test your code by modifying these values
checkObj("gift");