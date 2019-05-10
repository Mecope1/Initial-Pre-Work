/*
Challenge 100:
What I learned: I learned how to iterate through a set of dictionaries within a list to determine if multiple conditions
were true.
*/


//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
  var returnValue = "";
  for (var i = 0; i < contacts.length; i++){
    if (contacts[i]["firstName"] === name && contacts[i].hasOwnProperty(prop)){
      returnValue = contacts[i][prop];
      break;
    }
    else if(contacts[i]["firstName"] === name){
      returnValue = "No such property";
      break;
    }
    else {
      returnValue = "No such contact";
    }

  }
  return returnValue;
}
// Change these values to test your function
lookUpProfile("Akira", "likes");