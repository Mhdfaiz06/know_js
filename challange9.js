let budget = Number(prompt("Enter your Monthly Budget:"));
let dataUsage = Number(prompt("Enter your Daily Data Usage (in GB):"));
console.log("Monthly Budget: ₹" + budget);
console.log("Daily Data Usage: " + dataUsage + " GB");
if (dataUsage > 2.0) {
    if (budget >= 799) {
        console.log("Recommendation: Premium Plan (₹799)");
    } else {
        console.log("Your usage requires the Premium Plan (₹799), but your budget is too low.");
    }
} 
else if (dataUsage > 1.5 && dataUsage <= 2.0) {
    if (budget >= 499) {
        console.log("Recommendation: Standard Plan (₹499)");
    } else {
        console.log("Your usage requires the Standard Plan (₹499), but your budget is too low.");
    }
} 
else {
    if (budget >= 299) {
        console.log("Recommendation: Basic Plan (₹299)");
    } else {
        console.log("Budget too low. Minimum plan starts at ₹299.");
    }
}