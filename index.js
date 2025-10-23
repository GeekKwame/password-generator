const characters = [
    // Uppercase letters A-Z
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    
    // Lowercase letters a-z
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    
    // Numbers 0-9
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    
    // Special characters
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", 
    "=", "[", "]", "{", "}", "|", ";", ":", ",", ".", "<", ">", "?"
];

// Function to generate a random password
function generatePassword(length = 15) {
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

// Function to generate two passwords and display them
function generatePasswords() {
    const password1Element = document.getElementById("password1");
    const password2Element = document.getElementById("password2");
    
    const password1 = generatePassword();
    const password2 = generatePassword();
    
    password1Element.textContent = password1;
    password2Element.textContent = password2;
}

// Add click event listener to the generate button
document.addEventListener("DOMContentLoaded", function() {
    const generateBtn = document.getElementById("generate-btn");
    generateBtn.addEventListener("click", generatePasswords);
});