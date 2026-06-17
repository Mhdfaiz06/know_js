
let balance = 10000; 
let r= true;

while (r) {

    let choice = Number(prompt(`Welcome to TECHSHIP ATM
    1. Balance Inquiry
    2. Deposit
    3. Withdrawal
    4. Exit
    
    Enter your choice (1-4):`));
    switch (choice) {
        case 1:
            console.log("Current Balance: ₹" + balance);
            break;
            
        case 2:
            let depAmount = Number(prompt("Enter deposit amount:"));
            balance += depAmount;
            console.log("Deposit successful");
            break;
            
        case 3:
            let withAmount = Number(prompt("Enter withdrawal amount:"));
            balance -= withAmount;
            console.log("Withdrawal successful.") 
            break;
            
        case 4:
            console.log("Thank you for using TECHSHIP ATM. Goodbye!");
            r=false;
            break;
            
        default:
    
            console.log("Invalid choice. Please select a valid option.");
            break;
    }
}