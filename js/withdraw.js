// event handler for withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const previousBalanceTotal = getTextElementValueById("balance-total");
  if (newWithdrawAmount == "") {
    alert("Please enter a amount you want to withdraw!!!");
    return;
  }
  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid number, not text!!!");
    return;
  }
  if (newWithdrawAmount < 0) {
    alert("Please provide a positive number!!!");
    return;
  }

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Baap er Bank e Eto Taka Nai!!!");
    return;
  }

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  const currentBalanceTotalAmount = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("withdraw-total", currentWithdrawTotal);
  setTextElementValueById("balance-total", currentBalanceTotalAmount);
});

document
  .getElementById("withdraw-field")
  .addEventListener("keyup", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click

      document.getElementById("btn-withdraw").click();
    }
  });
