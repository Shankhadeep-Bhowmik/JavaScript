let signupButton = document.getElementById("signupButton");

signupButton.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let age = parseInt(document.getElementById("age").value.trim());
  let message = document.getElementById("message");
  try {
    if (name === "") {
      throw new Error("Name shouldn't be empty!");
    } else if (!email.includes("@")) {
      throw new Error("Enter valid email.");
    } else if (password.length < 6) {
      throw new Error("Password must contain 6 characters");
    } else if (!(age >= 18 && age <= 60)) {
      throw new Error("Age must be between 18 and 60");
    } else {
      message.textContent = "Success";
      message.className = "success";
    }
  } catch (error) {
    message.textContent = error.message;
    message.className = "error";
  }
});
