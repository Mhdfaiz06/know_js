let income = Number (prompt("enter the income"));
console.log("Income : " + income);
let food = Number (prompt("enter the food expense"));
console.log("Food Expense : " + food);
let transport = Number (prompt("enter the transport expense"));
console.log("Transport Expense : " + transport);
let entertainment = Number (prompt("enter the entertainment expense"));
console.log("Entertainment Expense : " + entertainment);
let miscellaneous = Number (prompt("enter the miscellaneous expenses"));
console.log("Miscellaneous Expenses : " + miscellaneous);

let total = food + transport + entertainment + miscellaneous;
console.log('Total Expense : ' + total);
let saving = income - total;
console.log('Saving : ' + saving);
let expensePercentage = (total/income)*100;
console.log('Expense Percentage : ' + expensePercentage + '%');

