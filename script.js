// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var lowercase = ["abcdefghijklmnopqrstuvwxyz"]
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var number = ["0123456789"]
var characters = ["!@#$%&*"]
var selectedArray = [];


// Alert with password criteria 
window.alert("The criteria for a password is lowercase , uppercase , number and character");

var validInput =true;

// Asks for the length of password 
var promptLength = function () {
  var promptLength = window.prompt("How long would you like for your password to be ? It must be betweeen 8-28 character")
 
  // validate  answer 
  if (promptLength === "" || promptLength === null) {
    window.alert("You need to provide a valid answer! Please try again")
    // return will call it again and stop the rest of the function 
    return promptLength();
 }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);