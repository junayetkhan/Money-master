function getExpenses(elementid) {
  const getInputField = document.getElementById(elementid);
  const getInputFieldString = getInputField.value;
  const getInputFieldToNum = parseFloat(getInputFieldString);
  return getInputFieldToNum;
}
function totalExpenses() {
  const foodField = getExpenses("food");
  const rentField = getExpenses("rent");
  const clothesField = getExpenses("clothes");
  const totalExpensesAmmount = foodField + rentField + clothesField;
  return totalExpensesAmmount;
}
document.getElementById('calculate-btn').addEventListener("click",function(){
  const getIncome = getExpenses('income');
  const calculate = totalExpenses();
  const gettotalExpense = document.getElementById('total-expense');
  gettotalExpense.innerText = calculate;
  const totalcalculation = getIncome - calculate;
  const getBalance = document.getElementById('balance');
  getBalance.innerText = totalcalculation;
})