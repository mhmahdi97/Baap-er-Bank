// event handler for withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  const currentBalanceTotalAmount = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("withdraw-total", currentWithdrawTotal);
  setTextElementValueById("balance-total", currentBalanceTotalAmount);
});
