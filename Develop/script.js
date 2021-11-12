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

let numberOfCharacters = prompt("Enter password length: ")
  console.log(numberOfCharacters);



  if (numberOfCharacters < 8){
    alert("Please enter a number between 8 and 100.")
  } else {

  }

  if (numberOfCharacters > 100){
    alert("Please enter a number between 8 and 100.")
  } else {

  }




// Assignment Code
let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  return "123";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Generate random number

let randomNumber = Math.floor(Math.random()*upperCaseCharacters.length)

upperCaseCharacters[randomNumber]

for (i=0, i< 100, i++) {

}

console.log(i)


let password = "";
for (let index = 0; index < 100; index++) {
  password+="a";
  console.log(password)
  
}






// if (firstpasschoice === true){


// for (let i = 0; i < numCharacters; i++) {
//   const element = array[i];
  
// }