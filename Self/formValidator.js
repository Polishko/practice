const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const submitButton = form.querySelector("button[type='submit']");

function validateEmail() {
  const emailValue = email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailPattern.test(emailValue);
  showError(email, isValid ? "" : "Invalid email address.");
  return isValid;
}

function validatePassword() {
  const passwordValue = password.value.trim();
  const isValid =
    passwordValue.length >= 8 &&
    /[A-Z]+/.test(passwordValue) &&
    /[a-z]+/.test(passwordValue) &&
    /\d/.test(passwordValue);
  showError(
    password,
    isValid
      ? ""
      : "Password must be at least 8 characters, include both uppercase and lowercase letters, and a number."
  );
  return isValid;
}

function validateConfirmPassword() {
  const passwordConfirmValue = passwordConfirm.value.trim();
  const isValid = passwordConfirmValue === password.value.trim();
  showError(passwordConfirm, isValid ? "" : "Passwords do not match.");
  return isValid;
}

function showError(input, message) {
  const error = input.nextElementSibling;
  input.style.borderColor = message ? "red" : "green";
  error.textContent = message;
}

function validateForm() {
  const isFormValid =
    validateEmail() && validatePassword() && validateConfirmPassword();
  submitButton.disabled = !isFormValid;
}

form.addEventListener("input", validateForm);
