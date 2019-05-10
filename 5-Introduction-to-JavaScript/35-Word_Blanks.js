/*
Challenge 35:
What I learned: I learned how to concatenate multiple variables and strings together into one variable.
*/


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
  result = "My " + myAdjective + " friendly "+ myNoun + " chased the " + "rabbit, who " + myVerb + " " + myAdverb + ".";
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");