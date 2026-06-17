let foodAmount = Number(prompt("Enter the Food Amount:"));

let discount = 0;
if (foodAmount >= 1000) {
    discount = foodAmount * 0.10;
}

let discountedAmount = foodAmount - discount;
let gst = discountedAmount * 0.05;
let serviceCharge = discountedAmount * 0.10;
let finalBill = discountedAmount + gst + serviceCharge;

console.log("--- FINAL INVOICE ---");
console.log("Food Amount    : ₹" + foodAmount);

if (discount > 0) {
    console.log("Discount (10%) : -₹" + discount);
}

console.log("Subtotal       : ₹" + discountedAmount);
console.log("GST (5%)       : ₹" + gst);
console.log("Service (10%)  : ₹" + serviceCharge);
console.log("---------------------");
console.log("TOTAL PAYABLE  : ₹" + finalBill);