// step-1: Add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  //   step-2: get the email address inside the email input file
  //   always remember to use .value to get text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //   step-3: get password
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  if (email === "baap@bank.com" && password === "baaperbank") {
    window.location.href = "bank.html";
  } else if (
    email === null ||
    email === "" ||
    password === null ||
    password === ""
  ) {
    alert(
      "Please enter the valid Email Address and Password provided by 'Mahmud Hasan Mahdi'"
    );
  }
  //   else if (password === null) {
  //     alert("Please provid the Password collected from 'Mahmud Hasan Mahdi'");
  //   }
  else {
    alert("Incorrect Email and Password");
  }
});
