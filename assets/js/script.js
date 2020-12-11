// Assignment code here
// character length function that propts user and returns length
function characterLength(){
  var input = window.prompt("How many Characters Long ? (8 Minimum  & 128 Maximum)");
// out of range answer fix 
  if (input < 8 || input >128){
    window.alert(" ERROR Character length can only be from 8-128 characters long ");
    characterLength();
  }
  else {
    return input ;
  }

}

/* create function that  prompts user to  select certain character types
  and then stores them in an array using a loop.

*/
// create function for generatePassword()

function generatePassword(){
  // get character length from user  and use the value to demonstate how long it will be 
var charLength = characterLength();
return charLength;
  // get character types from user and demonstrate the types shown

  // finally generate password and return it 
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
