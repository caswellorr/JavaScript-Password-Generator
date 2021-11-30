// ========== Arrays =========

// Global Variables - Arrays containing the required parameters for a random password

const lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const specialCharacters = ['!', '@', '#', '$', '%', '+', '&', '*', '?', '~'];


console.log(lowerCaseCharacters.join(''));
console.log(upperCaseCharacters);
console.log(numberArray);
console.log(specialCharacters);

// =========== Generate Password Button ============

// Add event listener to generate button that initializes write password function
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// ============= Write Password Function ===============

// Write password to the #password input
function writePassword() {
  // the password will become what is generated in the function
  let password = generatePassword();
  // the generated password will be dispkayed in the textarea id'd password
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// ============= Generate Password Function ============

function generatePassword() {
  // Upon on immediate pass at the function, this clears the mega array and the generated password
  let megaArray = '';
  let password = ''

  
  let numberOfCharacters = prompt("Enter password length: ")
  // while loop that will reprompt the user is they pick lewss than 8 characters or more than 100 or if it's not a number
  while (numberOfCharacters < 8 || numberOfCharacters > 100 || isNaN(numberOfCharacters) === true) {
    alert('Please enter a number between 8 and 100')
    numberOfCharacters = prompt("Enter password length: ")
  }
  console.log(numberOfCharacters);

  // user confirms which style of characters they want to use in their password
  let isUpperSelected = confirm("Do you want upper case letters?");
  let isLowerSelected = confirm("Do you want lower case letters?");
  let isNumberSelected = confirm("Do you want numbers?");
  let isSpecialCharactersSelected = confirm("Do you want special characters?");

  // if user cancels all options, user will be reprompted to select at least one option to generate their password
  while (!isUpperSelected && !isLowerSelected && !isNumberSelected && !isSpecialCharactersSelected) {
    alert('Please select at least one character option');
    isUpperSelected = confirm("Do you want upper case letters?");
    isLowerSelected = confirm("Do you want lower case letters?");
    isNumberSelected = confirm("Do you want numbers?");
    isSpecialCharactersSelected = confirm("Do you want special characters?");
  }

  // conditionals to build the password -  if character option is selected, add the joined array (that makes it one string), to the mega array which the password will be built from
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

  console.log(megaArray);

  // loops through the length of characters based on the user's first prompt

  for (let i = 0; i < numberOfCharacters; i++) {

    // the password equals the randomized last character of the megaArray which is rounded to th enearest whole number, randomized, then multiplied the length of the megaArray
    password += megaArray.charAt(Math.floor(Math.random() * megaArray.length))
  }

  // if the computer makes it through all the above functions coprrectly, return the generated password
  return password;

}


// ============== Pseudo Code =============

// Take array and pick out random characters for as many characters as selected -- "generate random number / index" so we can index randomly to randomize the selection on the array

// user input is how many times I loop

// generate random numbers based on users input then 

// grab random character

// concatinate random characters onto password

// display password





// Generate random number

// let randomNumber = Math.floor(Math.random()*megaArray.length)

