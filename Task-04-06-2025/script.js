function validateForm() {
  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const website = document.getElementById("website");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const websiteError = document.getElementById("websiteError");
  const messageError = document.getElementById("messageError");

  [name, email, website, message].forEach(el => el.classList.remove("error"));
  [nameError, emailError, websiteError, messageError].forEach(el => el.textContent = "");

  if (name.value.trim() === "") {
    name.classList.add("error");
    nameError.textContent = "This field is required";
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.trim() === "") {
    email.classList.add("error");
    emailError.textContent = "This field is required";
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    email.classList.add("error");
    emailError.textContent = "A valid email address is required";
    isValid = false;
  }

  const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-]*)*\/?$/;
  if (website.value.trim() === "") {
    website.classList.add("error");
    websiteError.textContent = "This field is required";
    isValid = false;
  } else if (!urlPattern.test(website.value.trim())) {
    website.classList.add("error");
    websiteError.textContent = "A valid URL is required";
    isValid = false;
  }

  if (message.value.trim() === "") {
    message.classList.add("error");
    messageError.textContent = "This field is required";
    isValid = false;
  }

  return isValid;
}
