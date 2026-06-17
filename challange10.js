let age = Number(prompt("Enter your Age:"));
let gender = prompt("Enter your Gender (M/F/Other):").toUpperCase();
let baseFare = Number(prompt("Enter the Ticket Fare:"));
console.log(" age  " + age);
console.log(" gender  " + gender);
console.log(" base fare  " + baseFare);
let discountPercent = 0;

if (age < 5) {
    discountPercent = 1.0; 
} 
else if (age <= 12) {
    discountPercent = 0.50; 
} 
else if (age >= 60) {
    if (gender === "F") {
        discountPercent = 0.50;
    } else {
        discountPercent = 0.40;
    }
} 
else if (gender === "F") {
    discountPercent = 0.10;
}

let discountAmount = baseFare * discountPercent;
let finalFare = baseFare - discountAmount;

console.log("--- Train Ticket Receipt ---");
console.log("Age         : " + age);
console.log("Gender      : " + gender);
console.log("Base Fare   : ₹" + baseFare);
console.log("Discount    : -₹" + discountAmount);
console.log("Final Fare  : ₹" + finalFare);