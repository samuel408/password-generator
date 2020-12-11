// Assignment code here
var x =[1, 2, 3,4 ]
// create function for generatePassword()
function generatePassword(){
var turtle = 2;
  return turtle;
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
