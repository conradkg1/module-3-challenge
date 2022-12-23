// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:",.<>/?'
//   passwordText.value = password;

// }

function writePassword(){
  var pass123 = "";
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()'
  for (let i = 1; i < 8; i++) {
    var char = Math.floor(Math.random()*characters.length + 1);
    pass123 += characters.charAt(char);
  }
  return pass123;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(pass123)
