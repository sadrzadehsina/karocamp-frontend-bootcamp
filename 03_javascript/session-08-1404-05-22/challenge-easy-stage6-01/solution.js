const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const successMessage = document.getElementById("successMessage");

const sendMessageBtn = document.getElementById("sendMessageBtn");

sendMessageBtn.addEventListener("click", () => {

  let isValid = true;

  if (nameInput.value === '') {
    nameError.innerText = "name is required";
    nameInput.style.border = "1px solid red";

    isValid = false;
  } else {
    nameError.innerText = "";
    nameInput.style.border = "1px solid black";
  }

  if (emailInput.value === '') {
    emailError.innerText = "email is required";
    emailInput.style.border = "1px solid red";
    
    isValid = false;
  } else {
    emailError.innerText = "";
    emailInput.style.border = "1px solid black";
  }

  if (isValid === true) {
    successMessage.style.display = "block";
  }

})
