// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var ippercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var special = "!@#$%&*?"

  var lowercasePref = confirm("Would you like lowercase characters?");
  var lowercasePref = confirm("Would you like uppercase characters?");
  var lowercasePref = confirm("Would you like numerical characters?");
  var specialPref = confirm("Would you like special characters?");

  var passwordLength = prompt("How many characters should your password be?");
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
