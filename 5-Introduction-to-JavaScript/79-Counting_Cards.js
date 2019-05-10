/*
Challenge 79:
What I learned: I learned how to check against an array for values and how to use a global count variable to keep
track of the number of times an event happens. I also learned how to count cards.
*/


var count = 0;

function cc(card) {
  // Only change code below this line
  var addOne = [2, 3, 4, 5, 6]
  var addNegOne = [10, 'J', 'Q', 'K', 'A']
  // var addZero = [7, 8, 9]

  var betOrHold = "Hold"

  if (addOne.includes(card)) {
    count += 1
  }
  else if (addNegOne.includes(card)) {
    count -= 1
  }
  // else if (card in addZero){
  //   break;
  // }

  if (count >= 1){
    betOrHold = " Bet"
  }
  else {
    betOrHold = " Hold"
  }
  return count + betOrHold ;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
// cc(2); cc(3); cc(4); cc(5); cc(6);
cc(2); cc(3); cc(7); cc('K'); cc('A');