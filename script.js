// Assignment code here

function generatePassword() {

var lowercase = ["abcdefghijklmnopqrstuvwxyz"]
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var number = ["0123456789"]
var characters = ["!@#$%&*"]
var selectedArray = [];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Alert with password criteria 
window.alert("The criteria for a password is lowercase , uppercase , number and character");

var validInput =true;

// Asks for the length of password 
function generatePassword() {
  var passwordlength = parseInt(prompt("How long would you like for your password to be ? It must be betweeen 8-28 character")
 
  // validate  answer 
  if (passwordlength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters")
    // return will call it again and stop the rest of the function 
    return generatePassword();
 }
 // if no number is inserted this alert will show
 if (isNaN(passwordlength)) {
   window.alert("You must enter a valid number")
   return null;
 }


   
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



