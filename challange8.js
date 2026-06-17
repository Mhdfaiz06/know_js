let password = prompt("Enter your password:");

let hasUpper = false;
let hasLower = false;
let hasNumber = false;

for (let i = 0; i < password.length; i++) {
    let char = password[i]; 

    if (char >= "A" && char <= "Z") {
        hasUpper = true;
    } 
    else if (char >= "a" && char <= "z") {
        hasLower = true;
    } 
    else if (char >= "0" && char <= "9") {
        hasNumber = true;
    }
}

let errors = "";

if (password.length < 8) {
    errors += "- Minimum 8 characters required.\n"; 
}
if (hasUpper == false) {
    errors += "- Must contain at least one uppercase letter.\n";
}
if (hasLower == false) {
    errors += "- Must contain at least one lowercase letter.\n";
}
if (hasNumber == false) {
    errors += "- Must contain at least one number.\n";
}

if (errors == "") {
    console.log("Success! Password is valid and strong.");
} else {
    console.log("Password Validation Failed:\n" + errors);
}
