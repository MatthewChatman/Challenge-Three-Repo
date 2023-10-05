// Assignment Provided Code
// Query selectors
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// variables for password criteria
var numbers = "0123456789";
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var optionsVariable = "";
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

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
    var lowercaseLett = confirm("Include lowercase letters?");
    var uppercaseLett = confirm("Include uppercase letters?");
    var num = confirm("Include numbers?");
    var specialChar = confirm("Include special characters?");

    //  Second function to verify length criteria is satisfactory
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Invalid Selection. Please try again.");
      var passwordLength = confirm("CAUTION: Password must be between 8 and 128 characters.");
      var passwordLength = prompt("Choose your desired password length (must be between 8 and 128 characters):");

      // Choose additional password criteria
          var lowercaseLett = confirm("Include lowercase letters?");
          var uppercaseLett = confirm("Include uppercase letters?");
          var num = confirm("Include numbers?");
          var specialChar = confirm("Include special characters?");
    }

    // "Cancel" may not be selected for each character type. At least one character type must be included to qualify
    else if (lowercaseLett === false && uppercaseLett === false && num === false && specialChar === false) {
        alert("CAUTION: You must chose at least one password criteria.");
        var lowercaseLett = confirm("Include lowercase letters?");
        var uppercaseLett = confirm("Include uppercase letters?");
        var num = confirm("Include numbers?");
        var specialChar = confirm("Include special characters?");
    }

    // Use the criteria that are selected to generate the password
    if (lowercaseLett) {
        optionsVariable += lowercaseAlphabet;
    }

    if (uppercaseLett) {
        optionsVariable += uppercaseAlphabet;
    }

    if (num) {
        optionsVariable += numbers;
    }

    if (specialChar) {
        optionsVariable += specialCharacters;
    }

    // Generate random password based on selected criteria
    for (var i = 0; i < passwordLength; i++) {
        // Select random character values for string. Continue until speficied password length. 
        randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
    }
    password.value = randomString;

}

// Call the function
// writePassword();