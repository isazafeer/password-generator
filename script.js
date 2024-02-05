// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  
  //Initialising variables
  var password;
  var lengthLoopRunning = true;

  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var number = "0123456789"
  var special = "!@#$%&*?"

  var lowercasePref = confirm("Would you like lowercase characters?");
  var uppercasePref = confirm("Would you like uppercase characters?");
  var numberPref = confirm("Would you like numerical characters?");
  var specialPref = confirm("Would you like special characters?");

  alert ("You must select at least one character type for your password");
  //while??//

  while (lengthLoopRunning) {
    var passwordLength = Number(prompt("How many characters should your password be?"));
    if (Number.isInteger(passwordLength)) {
      if (passwordLength >= 8 && passwordLength <= 42) {
        lengthLoopRunning = false;
      } else {
        alert("length incorrect!!")
      }
    } else {
      alert("enter a number!!")
    }
  }

  //check to make sure password length is a number//
  //validate password length//

  var passwordCharacters = "";

  if (lowercasePref) {
    passwordCharacters += lowercase;
  }

  if (uppercasePref) {
    passwordCharacters += uppercase;
  }
  
  if (numberPref) {
    passwordCharacters += number;
  }

  if (specialPref) {
    passwordCharacters += special;
  }


  return password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
