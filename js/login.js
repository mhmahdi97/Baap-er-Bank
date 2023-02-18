//  Add click event handler to the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  //   get the email address inside the email input file
  //   always remember to use .value to get text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //   get password
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  if (email === "baap@bank.com" && password === "baaperbank") {
    window.location.href = "bank.html";
  } else if (email === "" || password === "") {
    alert(
      "Please enter the valid Email Address and Password provided by 'Mahmud Hasan Mahdi'"
    );
  } else {
    alert("Incorrect Email and Password");
  }
});

// Add enter key event handler to the input field
document
  .getElementById("user-password")
  .addEventListener("keyup", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      console.log("Key is presse");
      document.getElementById("btn-submit").click();
    }
  });
document
  .getElementById("user-email")
  .addEventListener("keyup", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click

      document.getElementById("btn-submit").click();
    }
  });
