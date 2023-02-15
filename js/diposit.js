// Click event to deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // captures value from diposit input fiend
  const dipositField = document.getElementById("diposit-field");
  const newDipositAmountString = dipositField.value;
  const newDipositAmount = parseFloat(newDipositAmountString);

  // showing output of diposit
  const dipositTotalElement = document.getElementById("diposit-total");
  const previousDipositTotalString = dipositTotalElement.innerText;
  const previousDipositTotal = parseFloat(previousDipositTotalString);

  // Add numbers to set the total deposits
  const currentDepositTotal = previousDipositTotal + newDipositAmount;
  dipositTotalElement.innerText = currentDepositTotal;

  // get the balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // Calculate current total balance
  const currentBalanceTotalAmount = previousBalanceTotal + newDipositAmount;
  balanceTotalElement.innerText = currentBalanceTotalAmount;

  // clear the diposit input field after click
  dipositField.value = "";
});
