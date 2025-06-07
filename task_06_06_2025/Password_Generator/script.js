function generatePassword() {
  const length = document.getElementById("length").value;
  const useChars = document.getElementById("useChars").checked;
  const useNumbers = document.getElementById("useNumbers").checked;

  let chars = "";
  if (useChars) chars += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}[]?";
  if (useNumbers) chars += "0123456789";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const password = document.getElementById("password");
  password.select();
  password.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Password copied!");
}

function updateLengthLabel() {
  const len = document.getElementById("length").value;
  document.getElementById("lengthValue").innerText = len;
}
