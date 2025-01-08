// Regex for validating email
const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

// DOM Elements
const emailInput = document.getElementById('email-input');
const validateBtn = document.getElementById('validate-btn');
const result = document.getElementById('result');

// Validation function
function validateEmail() {
  const userInput = emailInput.value.trim();
  
  if (emailRegex.test(userInput)) {
    result.textContent = `"${userInput}" is a valid email address! ✅`;
    result.style.color = 'green';
  } else {
    result.textContent = `"${userInput}" is NOT a valid email address. ❌`;
    result.style.color = 'red';
  }
}

// Event Listener
validateBtn.addEventListener('click', validateEmail);

// Allow pressing Enter to validate
emailInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') validateEmail();
});
