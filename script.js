const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

const charCount = document.getElementById("charCount");

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// 🔥 Live Validation Function
function validateForm() {
  let isValid = true;

  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let message = messageInput.value.trim();

  // clear errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("messageError").innerText = "";

  // name
  if (name === "") {
    document.getElementById("nameError").innerText = "Name required";
    isValid = false;
  }

  // email
  if (email === "") {
    document.getElementById("emailError").innerText = "Email required";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Invalid email";
    isValid = false;
  }

  // message
  if (message === "") {
    document.getElementById("messageError").innerText = "Message required";
    isValid = false;
  }

  // enable/disable button
  submitBtn.disabled = !isValid;

  return isValid;
}

// 🔥 Live typing events
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
messageInput.addEventListener("input", () => {
  validateForm();

  // character counter
  charCount.innerText = messageInput.value.length + "/200";
});

// 🔥 Submit
form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (validateForm()) {
    document.getElementById("successMsg").innerText =
      "Form submitted successfully!";
    form.reset();
    charCount.innerText = "0/200";
    submitBtn.disabled = true;
  }
});