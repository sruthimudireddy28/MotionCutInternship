// Password validation rules
const minLength = 8;
const maxLength = 16;
const upperCaseLetters = /[A-Z]/;
const lowerCaseLetters = /[a-z]/;
const numbers = /[0-9]/;
const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;

// Get DOM elements
const passwordInput = document.getElementById('password-input');
const passwordError = document.getElementById('password-error');

// Listen for input events
passwordInput.addEventListener('input', () => {
    validatePassword();
});

// Function to validate password
function validatePassword() {
    const password = passwordInput.value;
    let isValid = true;

    // Check length
    if (password.length < minLength || password.length > maxLength) {
        isValid = false;
    }

    // Check for uppercase letter
    if (!upperCaseLetters.test(password)) {
        isValid = false;
    }

    // Check for lowercase letter
    if (!lowerCaseLetters.test(password)) {
        isValid = false;
    }

    // Check for number
    if (!numbers.test(password)) {
        isValid = false;
    }

    // Check for special character
    if (!specialCharacters.test(password)) {
        isValid = false;
    }

    // Update error message
    if (isValid) {
        passwordError.textContent = '';
    } else {
        passwordError.textContent = 'Password must contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters.';
    }
}