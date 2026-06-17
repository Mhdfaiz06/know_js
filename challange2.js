let age = Number(prompt('enter the age '));
let sal = Number(prompt('enter the Monthly salary'));
let exloan = Number(prompt('enter the existing loan amount'));
console.log('Age : ' + age);
console.log('Monthly Salary : ' + sal);
console.log('Existing Loan Amount : ' + exloan);
let ages =0;
let  sals = 0;
let exloans =0;
if (age >= 25){
     
     ages = 1;
}

if(sal >= 25000){
     sals = 1;
}
if(exloan <= 500000){
     exloans = 1;
}

let total = ages + sals + exloans;
if (total == 3){
    console.log('Eligible for scholarship');
}
else{
    console.log('Not Eligible for loan due to the following reasons :');
    if (ages === 0) {
        console.log('- Age is less than 25');
    }
    if (sals === 0) {
        console.log('- Monthly salary is less than 25000');
    }
    if (exloans === 0) {
        console.log('- Existing loan amount is greater than 500000');
    }
}
