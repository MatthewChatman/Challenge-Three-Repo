// Provided Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// variables for password criteria
var numbers = "0123456789";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var userdataCriteria = "";
var specialSymbols = " !\"#-./:;<=>?@[\]^_`{$%&'()*+,|}~";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function for Password generation
function writePassword() {

    // Prevent refresh when whe button is clicked
    event.preventDefault();

    // Clear previous password
    password.value === "";
    var randomString = "";

//  Choose Password length
    var passwordLength = prompt("Choose your desired password length (must be between 8 and 128 characters):");

// Choose additional password criteria
    var lowercaseChar = confirm("Include lowercase letters?");
    var uppercaseChar = confirm("Include uppercase letters?");
    var num = confirm("Include numbers?");
    var specialChar = confirm("Include special characters?");

    //  Second function to verify length criteria is satisfactory
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Invalid Selection. Please try again.");
      var passwordLength = confirm("CAUTION: Password must be between 8 and 128 characters.");
      var passwordLength = prompt("Choose your desired password length (must be between 8 and 128 characters):");

      // Choose additional password criteria
          var lowercaseChar = confirm("Include lowercase letters?");
          var uppercaseChar = confirm("Include uppercase letters?");
          var num = confirm("Include numbers?");
          var specialChar = confirm("Include special characters?");
    }

    // "Cancel" may not be selected for each character type. At least one character type must be included to qualify
    else if (lowercaseChar === false && uppercaseChar === false && num === false && specialChar === false) {
        alert("CAUTION: You must chose at least one password criteria.");
        var lowercaseChar = confirm("Include lowercase letters?");
        var uppercaseChar = confirm("Include uppercase letters?");
        var num = confirm("Include numbers?");
        var specialChar = confirm("Include special characters?");
    }

    // Use the criteria that are selected to generate the password
    if (lowercaseChar) {
        userdataCriteria += lowercaseLetters;
    }

    if (uppercaseChar) {
        userdataCriteria += uppercaseLetters;
    }

    if (num) {
        userdataCriteria += numbers;
    }

    if (specialChar) {
        userdataCriteria += specialSymbols;
    }

    // Generate random password based on selected criteria
    for (var i = 0; i < passwordLength; i++) {
        // Select random character values for string. Continue until speficied password length. 
        randomString += userdataCriteria.charAt(Math.floor(Math.random() * userdataCriteria.length));
    }
    password.value = randomString;

}

// Call function
// "writePassword();""

// <!-- ```
// GIVEN I need a new, secure password -->

// <!-- WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria -->
// <!-- 
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password -->

// <!-- WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters -->

// <!-- WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters -->

// <!-- WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected -->

// <!-- WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria -->

// <!-- WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ``` -->
