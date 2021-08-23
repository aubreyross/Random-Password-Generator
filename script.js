// Assignment Code
var generateBtn = document.querySelector("#generate");

//List of available charracters available for the generated password
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*=+";

//Variable Declaration 
var passwordLength = "";
var userInput = "";
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSymbol;

//generatePassword function is called inside the writePassword function
function generatePassword() {
  
  //Password Length prompt & requirements 
  var passwordLength = prompt ("Please enter the number of characters for your password. Your password must be between 8-128.");

  //Alert if the user does not select a number between 8-128 to meet requirements 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must contain 8-128 characters");
    generatePassword();
  }

  //Prompts that will ask the user to confirm if they want to include lower/uppercase letters, numbers, or symbols
  var confirmLower = confirm ("Click OK to include lowercase letters");
  var confirmUpper = confirm ("Click  OK to include uppercase letters");
  var confirmNumber = confirm ("Click OK to include numbers");
  var confirmSymbol = confirm ("Click OK to include symbols");

  //Alert if the user does not confirm at least one character type to meet requirements
    while (confirmLower === false && confirmUpper === false && confirmNumber === false && confirmSymbol ===false) {
      alert ("Must include at least one character type");
      generatePassword();
    }

  //Character conditions to include in the password 
  if (confirmLower) { 
    userInput += lower;
  }

  if (confirmUpper) {
    userInput += upper;
  }

  if (confirmNumber) {
    userInput += number;
  }

  if (confirmSymbol) {
    userInput += symbol;
  }

  //Create loop to generate new random passwords 
  var randomPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    randomPassword += userInput[Math.floor(Math.random() * userInput.length)];
    }
  console.log(randomPassword);
  return randomPassword;
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
