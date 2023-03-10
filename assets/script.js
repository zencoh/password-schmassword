// Assignment code here
 function generateNewPassword() {
    var passwordLength;

  //password requirement between 8-128 chars
    while(true){
      passwordLength = prompt("Choose the length of your password between 8 and 128 characters.");
      passwordLength = parseInt(passwordLength);
      if (passwordLength >= 8 && passwordLength <= 128){
        break;
    } else {
        alert("Please choose a number between 8 and 128.")
        generateNewPassword();
      }
    }

  //using ok and cancel as yes or no, returns true or false depending on users choice. Then the user gets a validation message
    // var lowerCase = confirm("Do you want to use lower case letters?");
    // var upperCase = confirm("Do you want to use upper case letters?");
    // var numbers = confirm("Do you want to include numbers?");
    // var specialChar = confirm("Do you want to include special characters?");

    var lowerCase = confirm("Do you want to use lower case letters?");
    if (lowerCase == true) {
      alert("You want to include lower case letters.");
    } else {
      alert("You do not want lower case letters.");
    }
    var upperCase = confirm("Do you want to use upper case letters?");
    if (upperCase == true) {
      alert("You want to include upper case letters.");
    } else {
      alert("You do not want upper case letters.");
    }
    var numbers = confirm("Do you want to include numbers?");
    if (numbers == true) {
      alert("You want to include numbers.");
    } else {
      alert("You do not want numbers.");
    }
    var specialChar = confirm("Do you want to include special characters?");
    if (specialChar == true) {
      alert("You want to include special characters.");
    } else {
      alert("You do not want special characters.");
    }

    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var nums = '0123456789';
    var special = '!@#$%^&*()-:;_=+,./<>?{}|\\';

  //if the user doesnt choose any of the character options then they are reminded and have to start over
    if (!lowerCase && !upperCase && !numbers && !specialChar){
      alert("You must choose at least 1 character type to use, please start over.")
      generateNewPassword()
    }

    var randomChars = [];

  // so this is if a user checked that they want a type of character then it wil go into the randomChars array to be used in the for loop below
    if (lowerCase){
      randomChars = randomChars.concat(lower.split(''));
    }
    if (upperCase){
      randomChars = randomChars.concat(upper.split(''));
    }
    if (numbers){
      randomChars = randomChars.concat(nums.split(''));
    }
    if (specialChar){
      randomChars = randomChars.concat(special.split(''));
    }

    var password = '';

  //generates a random password with the length chosen above as the length
  for (var i = 0; i < passwordLength; i++){
    // creates random password from the character types chosen above
    password += randomChars[Math.floor(Math.random() * randomChars.length)];
  }
  // bada bing bada bam you have a password
  return password

}

// Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
// Write password to the #password input, i changed the password to generateNewPassword because that is what I called it above
  function writePassword() {
    var password = generateNewPassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);