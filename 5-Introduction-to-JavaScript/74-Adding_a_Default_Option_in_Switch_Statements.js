/*
Challenge 74:
What I learned: I learned how to set a default option for a switch statement.
*/


function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
      case "a":
      answer = "apple";
      break;
      case "b":
      answer = "bird";
      break;
      case "c":
      answer = "cat";
      break;
      default:
      answer = "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);