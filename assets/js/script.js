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
function characterType(){
  var count = 0;
  count  = window.prompt("how many character types would you like to use?  please choose between 1-4 types(lowercase, uppercase, numeric, and/or special characters )" );
  if (count < 1 || count  > 4){
    window.alert(" ERROR how many types 1? 2? 3? or 4?");
    characterType();
  }
    else {
      return count;
    }
}
// create function for generatePassword()

function generatePassword(){
  // get character length from user  and use the value to demonstate how long it will be 
var charLength = characterLength();
  // get character types from user and demonstrate the types shown
  var charType = characterType();
    // var types =[];
    var upper = false;
    var lower = false;
    var numeric = false;
    var special = false;


    for(var i = 0; i < charType; i++){
       var input = window.prompt("What character types would you like to use? type each one by one  ( 1 = lowercase, 2= uppercase, 3 = numeric, and/or 4 = special characters (TO SELECT AN OPTION CHOOSE THE CORRESPONDING NUMBER )");
       while(input != 1 && input != 2 && input != 3 &&  input != 4){
        input = window.prompt(" ERROR Character types only have options 1-4 please try again");
      }
       switch ( input ){
         case '1':
           lower = true;
          break;
        case '2':
          upper = true;
          break;
        case '3':
          numeric = true;
          break;
        case '4' :
          special = true ;
       }
       
    }


  // finally generate password and return it  
    
//character sets
lowercase = "qwertyuiopasdfghjklzxcvbnm";
uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
numerical= "1234567890";
specialChar = "! @#$%^&*";
all =  "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890! @#$%^&*" ;
//return value variable
retVal = "";
//personal set that matches the users selcted criteria
personalSet = "";
if (lower === true){
  personalSet += lowercase;
}
if (upper === true){
  personalSet += uppercase;
}
if(numeric === true){
  personalSet += numerical;
}
if (special){
  personalSet += specialChar;
}
console.log (personalSet);


for ( var i =  0 ; i < charLength; i++){
  
    retVal += personalSet.charAt(Math.floor(Math.random() * personalSet.length));

  

  
}
return retVal;
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
