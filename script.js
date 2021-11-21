// Assignment code here
var generateBtn = document.querySelector("#generate");

// Arrays for lowercase , uppercase , numbers and characters

var lowercase = ["abcdefghijklmnopqrstuvwxyz"]
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var number = ["0123456789"]
var specialcharacters = ["!@#$%&*"]

var selectedArray = [];
var password = "" ;

function generatePassword() {
 
 
  // Length of the password is chosen 
  var passwordlength = parseInt(window.prompt("How long would you like for your password to be ? It must be betweeen 8-28 character."));
    if(passwordlength < 8 || passwordlength > 128) {
    alert("Password must be between 8 and 128 characters.");
    return null;
    
  }
    else if(isNaN(passwordlength)) {
    alert("You must enter a valid number");
    return null;
  }

  //confirm for lowercase "Ok or cancel"
var confirmlower = window.confirm("This password will contain lowercase letters.");
  if(confirmlower) {
    selectedArray = selectedArray. concat(lowercase);
  }
  // confirm for uppercase "Ok or cancel"
var confirmupper = window.confirm("This password will contain uppercase letters.");
  if(confirmupper) {
    selectedArray = selectedArray.concat(uppercase);
  }
  // confirm for numbers "Ok or cancel"
var confirmnumber = window.confirm("This password will contain numbers.");
  if (confirmnumber) {
    selectedArray = selectedArray.concat(number);
  }
 // confirm for special characters "Ok or cancel"
var confirmspecialcharacters = window.confirm("This password will contain  special characters.");
  if(confirmspecialcharacters) {
    selectedArray = selectedArray.concat(specialcharacters);
  }
 return selectedArray;
};

 
   
for (var i = 0; i < password; i++) {
  password = selectedArray [Math.floor(Math.random() * selectedArray.length)]
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

