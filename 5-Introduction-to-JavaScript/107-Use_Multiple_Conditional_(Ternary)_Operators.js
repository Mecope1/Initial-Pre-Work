/*
Challenge 107:
What I learned: I learned how to chain multiple conditional (ternary) operators.
*/


function checkSign(num) {
  return (num > 0) ? "positive" : (num == 0) ? "zero" : "negative";
}

checkSign(10);