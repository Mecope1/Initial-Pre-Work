/*
Challenge 75:
What I learned: I learned how to setup cases so that inputs that have the same output can be grouped with as few lines
of code as possible.
*/


function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
      answer = "Low"
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid"
      break;
    case 7:
    case 8:
    case 9:
      answer = "High"
      break;
  }
  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);
