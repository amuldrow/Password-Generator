// Assignment code here
var generateBtn = document.querySelector("#generate");

// Arrays for lowercase , uppercase , numbers and characters

var lowercase = ["abcdefghijklmnopqrstuvwxyz"]
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var number = ["0123456789"]
var specialcharacters = ["!@#$%&*"]
var selectedArray = [];

var password;


// Asks for the length of password 
function generatePassword() {
  // Length of the password is chosen 
  var password = parseInt(window.prompt("How long would you like for your password to be ? It must be betweeen 8-28 character.");
    if(password < 8 || password > 128) {
    window.alert("Password must be between 8 and 128 characters.");
    return null;
  }
    else if(isNaN(password)) {
    window.alert("You must enter a valid number");
    return null;
  }

  //character types to include in password







 // if no number is inserted this alert will show
  // if (isNaN(passwordl)) { window.alert("You must enter a valid number"); return null;
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

