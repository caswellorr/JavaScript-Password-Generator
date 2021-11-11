// Global Variables

const lowerCaseCharacters = ['a,', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const specialCharacters = ['!', '@', '#', '$', '%', '+', '&', '*', '?', '~'];

const megaArray = [...upperCaseCharacters, ...lowerCaseCharacters, ...numberArray, ...specialCharacters];

console.log(lowerCaseCharacters);
console.log(upperCaseCharacters);
console.log(numberArray);
console.log(specialCharacters);
console.log(megaArray);

// Initial Prompt : Number of Characters in New Pass

let numberOfCharacters = prompt ("How many characters would you like your password to be? Please choose a number between 8 and 100.")
  console.log(numberOfCharacters);







// Assignment Code
let generateBtn = document.querySelector("#generate");













// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










// if (firstpasschoice === true){

//   concatarraypaass = [....name, ... name] // build up 
// }


for (let i = 0; i < numCharacters; i++) {
  const element = array[i];
  
}