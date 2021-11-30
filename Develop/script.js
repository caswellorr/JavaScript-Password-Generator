// ========== Arrays =========

const lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const specialCharacters = ['!', '@', '#', '$', '%', '+', '&', '*', '?', '~'];

// =========== Generate Password Button ============

let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// ============= Write Password Function ===============

function writePassword() {

  let password = generatePassword();

  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// ============= Generate Password Function ============

function generatePassword() {

  let megaArray = '';
  let password = ''

  
  let numberOfCharacters = prompt("Enter password length: ")
  
  while (numberOfCharacters < 8 || numberOfCharacters > 100 || isNaN(numberOfCharacters) === true) {
    alert('Please enter a number between 8 and 100')
    numberOfCharacters = prompt("Enter password length: ")
  }
  
  let isUpperSelected = confirm("Do you want upper case letters?");
  let isLowerSelected = confirm("Do you want lower case letters?");
  let isNumberSelected = confirm("Do you want numbers?");
  let isSpecialCharactersSelected = confirm("Do you want special characters?");

  while (!isUpperSelected && !isLowerSelected && !isNumberSelected && !isSpecialCharactersSelected) {
    alert('Please select at least one character option');
    isUpperSelected = confirm("Do you want upper case letters?");
    isLowerSelected = confirm("Do you want lower case letters?");
    isNumberSelected = confirm("Do you want numbers?");
    isSpecialCharactersSelected = confirm("Do you want special characters?");
  }

  if (isLowerSelected) {
    megaArray += lowerCaseCharacters.join('');
  };
  if (isUpperSelected) {
    megaArray += upperCaseCharacters.join('');
  };
  if (isNumberSelected) {
    megaArray += numberArray.join('');
  };
  if (isSpecialCharactersSelected) {
    megaArray += specialCharacters.join('');
  };

  for (let i = 0; i < numberOfCharacters; i++) {

    password += megaArray.charAt(Math.floor(Math.random() * megaArray.length))

  }

  return password;

}

