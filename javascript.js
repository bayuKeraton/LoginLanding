var eyeClose = document.getElementById("closeEye");
var eyeOpen = document.getElementById("openEye");
var passwordInput = document.getElementById("passwordLogin");

eyeClose.addEventListener("click", () => {
  eyeClose.classList.add("hidden");
  eyeOpen.classList.remove("hidden");
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
  }
});

eyeOpen.addEventListener("click", () => {
  eyeClose.classList.remove("hidden");
  eyeOpen.classList.add("hidden");
  if (passwordInput.type == "text") {
    passwordInput.type = "password";
  }
});
