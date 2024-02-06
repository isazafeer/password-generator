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
  var lengthLoopRunning = true;
  var characterLoopRunning = true;
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var number = "0123456789"
  var special = "!@#$%&*?"

  while (characterLoopRunning) {
    var checkIfTrue = false;

    var lowercasePref = confirm("Would you like lowercase characters?");
    var uppercasePref = confirm("Would you like uppercase characters?");
    var numberPref = confirm("Would you like numerical characters?");
    var specialPref = confirm("Would you like special characters?");

    if (lowercasePref) {checkIfTrue = true;}
    if (uppercasePref) {checkIfTrue = true;}
    if (numberPref) {checkIfTrue = true;}
    if (specialPref) {checkIfTrue = true;}

    if (checkIfTrue) {characterLoopRunning = false;} else {
      alert ("You must select at least one character type for your password");
    }
  }

  while (lengthLoopRunning) {
    var passwordLength = Number(prompt("How many characters should your password be? You must choose between 8 and 128 characters."));
    if (Number.isInteger(passwordLength)) {
      if (passwordLength >= 8 && passwordLength <= 128) {
        lengthLoopRunning = false;
      } else {
        alert("You did not meet the requirements. You must choose between 8 and 128 characters!")
      }
    } else {
      alert("You did not meet the requirements. You must enter a number!")
    }
  }

//check to make sure password length is a number// 
//validate password length//

//creating string of characters that are selected//

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
//creating password variable//

  var password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }

  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
