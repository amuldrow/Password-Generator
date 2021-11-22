// Assignment code here
var generateBtn = document.querySelector("#generate");

// Arrays for lowercase , uppercase , numbers and characters

var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var specialcharacters = "!@#$%&*"

var selectedcharacters = "" ;
var passwordcharacters = "" ; 

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
var lowercasecharacters = window.confirm("This password will contain lowercase letters.");
  if(lowercasecharacters) {
    selectedcharacters = selectedcharacters.concat(lowercase);
  }
  // confirm for uppercase "Ok or cancel"
var uppercasecharacters = window.confirm("This password will contain uppercase letters.");
  if(uppercasecharacters) {
    selectedcharacters = selectedcharacters.concat(uppercase);
  }
  // confirm for numbers "Ok or cancel"
var numbercharacters = window.confirm("This password will contain numbers.");
  if (numbercharacters) {
    selectedcharacters = selectedcharacters.concat(number);
  }
 // confirm for special characters "Ok or cancel"
var specialcharacter = window.confirm("This password will contain  special characters.");
  if(specialcharacter) {
    selectedcharacters = selectedcharacters.concat(specialcharacters);
  }

  var randocharacters = randomcharacters (passwordlength);

  return randocharacters;


};

 function randomcharacters(length) {  
  var indexcharacters="";
  for (var i = 0; i < length; i++) {
  indexcharacters += selectedcharacters [Math.floor(Math.random() * selectedcharacters.length)]
  }
  return indexcharacters;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

