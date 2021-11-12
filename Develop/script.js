// Global Variables

const lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const specialCharacters = ['!', '@', '#', '$', '%', '+', '&', '*', '?', '~'];


console.log(lowerCaseCharacters);
console.log(upperCaseCharacters);
console.log(numberArray);
console.log(specialCharacters);

// Initial Prompt : Number of Characters in New Pass


function generatePassword() {
  let megaArray = [];

  let numberOfCharacters = prompt("Enter password length: ")
    console.log(numberOfCharacters);

  let isUpperSelected = confirm("Dou you want upper case letters?");
  let isLowerSelected = confirm("Dou you want upper case letters?");
  let isNumberSelected = confirm("Dou you want upper case letters?");
  let isSpecialCharactersSelected = confirm("Dou you want upper case letters?");
  
  if (isLowerSelected){
     megaArray = [...lowerCaseCharacters, ...megaArray];
  };
  if (isUpperSelected){
     megaArray = [...upperCaseCharacters, ...megaArray];
  };
  if (isNumberSelected){
     megaArray = [...numberArray, ...megaArray];
  };
  if (isSpecialCharactersSelected){
     megaArray = [...specialCharacters, ...megaArray];
  };

  console.log(megaArray);




  
    if (numberOfCharacters < 8){
      alert("Passwrod must be between 8 and 100 characters.")
    } else {
  
    }
  
    if (numberOfCharacters > 100){
      alert("Passwrod must be between 8 and 100 characters.")
    } else {
  
    };

  return "123";



}




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


// Generate random number

let randomNumber = Math.floor(Math.random()*upperCaseCharacters.length)

upperCaseCharacters[randomNumber]

// for (i=0, i< 100, i++) {

// }

console.log(i)


let password = "";
for (let i = 0; i < 100; i++) {
  password+="a";
  console.log(password)
  
}






// if (firstpasschoice === true){


// for (let i = 0; i < numCharacters; i++) {
//   const element = array[i];
  
// }