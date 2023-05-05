// Assignment code here


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");
// //   var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:",.<>/?'
// //   passwordText.value = password;

// // }

// function writePassword(){
//   var pass123 = "";
//   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()'
//   for (let i = 1; i < 8; i++) {
//     var char = Math.floor(Math.random()*characters.length + 1);
//     pass123 += characters.charAt(char);
//   }
//   return pass123;
// }


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// console.log(pass123)

var length;
var number;
var specialCharacter;
var upperCase;
var lowerCase;
var selecton;
var lettersUp;

const characters = ['numbers', 'letters','character']
number ='0123456789';
letters ='abcdefghijklmnopqrstuvwxyz';
character = "!@#$%^&*)(";
lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);