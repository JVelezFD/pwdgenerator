// Assignment Code
var generateBtn = document.querySelector("#generate");


//user collection
var userChoices = [];

//variable setup and character setup
var uInputPL = 9;
var ucharLCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ucharUCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var ucharSpecial= ["^","!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~","@"];
var ucharNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



//3.generate password from user inputs
function generatePassword() {
console.log("Password button working");
var password = "";

for (var i=0; i < uInputPL; i++) {
  var rletter = Math.floor(Math.random() * userChoices.length);
  password = password + userChoices[rletter];
}
return password;
}

//1.prompts for user input for password criteria length 8-128 and store criteria in function

  function getUPrompts () { 
    userChoices= [];
//pw length user input
    uInputPL = parseInt(prompt("How many characters would you like your password to be; between 8-128 characters *#'s only*?"));
    
  while(isNaN(uInputPL) || uInputPL < 8 || uInputPL > 128) {
        alert("Password length must be a number, between 8-128 digits. Try again.");
        return false;
      }
//(Criteria) uppercase, lowercase, special and number criteria confirms from user

      if (confirm("Would you like uppercase leters included in your password?")) {
        userChoices = userChoices.concat(ucharUCase);
      }

      if (confirm("Would you like lowercase leters included in your password?")) {
        userChoices = userChoices.concat(ucharLCase);
      }

      if (confirm("Would you like special characters included in your password?")) {
        userChoices = userChoices.concat(ucharSpecial);
      }

      if (confirm("Would you like numbers included in your password?")) {
        userChoices = userChoices.concat(ucharNums);
      }   
     return true;
    } 

// Write password to the #password input
function writePassword() {
  
  var approvedPrompts= getUPrompts();
  var passwordText = document.querySelector("#password");

  if(approvedPrompts) {
  var GPassword = generatePassword();
  passwordText.value = GPassword;
  }
  else {passwordText.value = "";
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

