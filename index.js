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
    const lengthInput = document.getElementById("length-input");
    
    // Get the length from the input field, with validation
    let length = parseInt(lengthInput.value);
    
    // Validate length (minimum 4, maximum 50)
    if (isNaN(length) || length < 4) {
        length = 4;
        lengthInput.value = 4;
    } else if (length > 50) {
        length = 50;
        lengthInput.value = 50;
    }
    
    const password1 = generatePassword(length);
    const password2 = generatePassword(length);
    
    password1Element.textContent = password1;
    password2Element.textContent = password2;
}

// Function to copy text to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return true;
        } catch (err) {
            document.body.removeChild(textArea);
            return false;
        }
    }
}

// Function to show copy feedback
function showCopyFeedback(element) {
    const originalText = element.textContent;
    element.textContent = "Copied!";
    element.style.color = "#10B981";
    
    setTimeout(() => {
        element.textContent = originalText;
        element.style.color = "#10B981";
    }, 1000);
}

// Add click event listener to the generate button
document.addEventListener("DOMContentLoaded", function() {
    const generateBtn = document.getElementById("generate-btn");
    generateBtn.addEventListener("click", generatePasswords);
    
    // Add click event listeners to password fields for copy functionality
    const password1Element = document.getElementById("password1");
    const password2Element = document.getElementById("password2");
    
    password1Element.addEventListener("click", async function() {
        if (this.textContent && this.textContent !== "Click generate to create passwords") {
            const success = await copyToClipboard(this.textContent);
            if (success) {
                showCopyFeedback(this);
            }
        }
    });
    
    password2Element.addEventListener("click", async function() {
        if (this.textContent && this.textContent !== "Click generate to create passwords") {
            const success = await copyToClipboard(this.textContent);
            if (success) {
                showCopyFeedback(this);
            }
        }
    });
});