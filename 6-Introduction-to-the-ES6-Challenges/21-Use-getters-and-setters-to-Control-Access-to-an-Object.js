/*
Challenge 21:
What I learned: I learned how to setup getters and setters to control how an object gets accessed.
*/


function makeClass() {
  "use strict";
  /* Alter code below this line */
    class Thermostat {
      constructor(fahrenheit) {
        this.fahrenheitTemp = fahrenheit
      }
      // getter
      get temp() {
        return (this.fahrenheitTemp*9.0/5)+32
      }
      // setter
      set temp(newTemp) {
        this.fahrenheitTemp = newTemp;
      }
    }

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C