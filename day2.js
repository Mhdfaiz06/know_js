//Exercise 1 
let name = "Mohammed Faiz";
let age = "21";
let college = "Saintgits College of Engineering";
let course = "Btech Computer science and engineering";
let city= "Kottayam";
console.log("Student Name : " ,name );
console.log("Student Age : " ,age );
console.log("Student College : " ,college );
console.log("Student Course : " ,course );
console.log("Student City : " ,city );

//Exercise 2
let maths = 67;
let physics = 78;
let chemistry = 89;
let english = 90;
let computer_science = 95;
let total_marks = maths + physics + chemistry + english + computer_science;
let average = total_marks / 5;
let percentage = (total_marks / 500) * 100;
console.log('Mathematics : ' + maths);
console.log('Physics : ' + physics);
console.log('Chemistry : ' + chemistry);
console.log('English : ' + english);
console.log('Computer Science : ' + computer_science);
console.log('Total Marks : ' + total_marks);
console.log('Average : ' + average);
console.log('Percentage : ' + percentage + '%');

//Exercise 3
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

//Exercise 4
function bmi (weight, height){
    return weight /(height*height);

}

let w = Number(prompt('enter weight'));
let h = Number(prompt('enter height'));
console.log('Weight : '+ w);
console.log('Height : '+ h);

let a  =bmi(w, h).toFixed(2);

console .log("BMI : " +a);

if (a< 18.5){
    console.log('underweight');
}
else if (a<25){
    console.log('normal');

}
else if (a<30)  {
    console.log('overweight');

}
else {
    console.log('obese');
}

//Exercise 5
let prices = [];
let quantity = [];
let totalitem = [];

let no = Number(prompt("enter the number of items"));
console.log("number of items : " + no);
for(let i = 1; i<=no; i++){

    let p = Number(prompt("enter the price of item " + i));
    let q = Number(prompt("enter the quantity of item " + i));

    prices.push(p);
    quantity.push(q);
    totalitem.push(p*q);
    console.log("price of item " + i + " : " + p);
    console.log("quantity of item " + i + " : " + q);
    console.log("total price of item " + i + " : " + (p*q));
}
let subtotal =0;

totalitem.forEach(function (val){
    subtotal += val;
});
console.log("Subtotal : " + subtotal);

let gst= subtotal * 0.18;
console.log("GST : " + gst);
let total = subtotal + gst;
console.log("Total : " + total);


//Exercise 6
function count(n){
    let l = n.length;
    console.log("length of string is: " + l);
    let upper = n.toUpperCase();
    let lower = n.toLowerCase();
    console.log("string in uppercase is: " + upper);
    console.log("string in lowercase is: " + lower);
    let search = word.toLowerCase();
    let contains = lower.includes(search);
    if (contains){
        console.log("the sentence contains the word  "+word);
    }
    else{
        console.log('the sentence does not contain the word '+word);
    }

}

let n = prompt("enter a string");
let word = prompt("enter a word to search");
console.log("sentance  :"+ n);
console.log("word to search :"+ word);
count(n);


//Exercise 7
function odd(n){
    if (n % 2 == 0){
        console.log('even');
        check(n);
    

    }
    else{
        console.log('odd');
        check(n);
    }
    
}

function check(n){
    if (n > 0){
        console.log('positive');
    }
    else if (n < 0){
        console.log('negative');
    }
    else{
        console.log('zero');
    }
}

let a = Number(prompt('enter a number '));
console.log(a);0
odd(a);

//Exercise 8

function largest3(a,b,c){
    console.log("largest number : " + Math.max(a,b,c));
    console.log("smallest number : " + Math.min(a,b,c));

}

function largest2(a,b){
    console.log("largest number : " + Math.max(a,b));
    console.log("smallest number : " + Math.min(a,b));

}
let a, b, c;

let count= 0;
 let n= Number(prompt("enter the total number of input numbers"));
 console.log("total number of input numbers : " + n);
 for (let i=1; i<=n; i++){
    let x = Number(prompt("enter number "+ i));
    count ++;
    if (i==1){
        a = x;
        console.log("number "+ count + " : " + a);
    }
    else if  (i==2){
         b = x;
            console.log("number "+ count + " : " + b);
    }
    else{
        c = x;
        console.log("number "+ count + " : " + c);
    };
}

if(n==2){
    largest2(a,b);
}
else {
    largest3(a,b,c);
}

//Exercise 9

let tc = Number(prompt("enter the total number of classes"));
console.log("total number of classes : " + tc);
let ac = Number (prompt("enter the total number of classes attended"));
console.log("total number of classes attended : " + ac);
console.log("percentage of classes attended : " + (ac/tc)*100 + "%");

//Exercise 10
let age = prompt("enter your age");
console.log("your age is : " + age);
if (age <=12){
    console.log("child");
}else if (age<=19){
 console.log("teenager");

}
else if (age<=64){
    console.log("adult");
}else {
    console.log("senior citizen");
}

//Exercise 10

let age = prompt("enter your age");
console.log("your age is : " + age);
if (age <=12){
    console.log("child");
}else if (age<=19){
 console.log("teenager");

}
else if (age<=64){
    console.log("adult");
}else {
    console.log("senior citizen");
}

//Exercise 11
function mul(a){
    for(let i= 1; i <=10; i++){
        console.log(a+"*"+i+"="+a*i);
    }
}

let a = Number(prompt('enter a number '));
mul(a);

//Exercise 12
let forward= "";
let backward = "";
let odd = "";
let even = "";

for (let i = 1 ; i<=100; i++){
    forward += i +",";
} 
console.log(forward);
for (let i = 100 ; i>=1; i--){
    backward += i +",";
    
}
console.log(backward);
for (let i = 2 ; i<=100; i+=2){
    even+= i +",";
} 

console.log(even);
for (let i = 1 ; i<=100; i+=2){
    odd += i +",";
}
console.log(odd);


//Exercise 13
console.log('pattern 1');


for (let i= 1; i<=5; i++){
let row1 = "";

    for(let j =1; j<=i; j++){
        row1 += "*";
        
    }
    console.log(row1);
}
console.log();

console.log('pattern 2');


for (let i= 1; i<=5; i++){
let row2 = "";

    for(let j =5; j>=i; j--){
        row2 += "*";
        
    }
    console.log(row2);
}
console.log();

console.log('pattern 3');


for (let i= 1; i<=5; i++){
let row3 = "";

    for(let j =1; j<=i; j++){
        row3 += j;
        
    }
    console.log(row3);
}
console.log();

console.log('pattern 4');
for (let i= 1; i<=5; i++){
let row4 = "";

    for(let j =1; j<=i; j++){
        row4 += i;
        
    }
    console.log(row4);
}
console.log();


//Challange 1
let ap = Number(prompt('enter the acadamic percentage'));
let atp = Number(prompt('enter the attendance percentage'));
let fi = Number(prompt('enter the family income'));
console.log('Academic Percentage : ' + ap);
console.log('Attendance Percentage : ' + atp);
console.log('Family Income : ' + fi);
let e= true;
let aps =0;
let  atps = 0;
let fis =0;
if (ap >= 75){
     
     aps = 1;
}

if(atp >= 85){
    
    atps = 1;
}

 if(fi <= 50000){
    fis = 1;
 }   

let total = aps + atps + fis;
if (total == 3){
    console.log('Eligible for scholarship');
}
else{
    console.log('Not Eligible for scholarship due to the following reasons :');
    if (aps === 0) {
        console.log('- Academic percentage is less than 75');
    }
    if (atps === 0) {
        console.log('- Attendance percentage is less than 85');
    }
    if (fis === 0) {
        console.log('- Family income is greater than 50000');
    }
}

//Challange 2
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

//challange3
let score = Number(prompt("enter your Entrance score"));
let ap = Number(prompt("enter your academic percentage"));
console.log("Entrance score : " + score);
console.log("Academic percentage : " + ap);

function scores(score, ap){
    let s = (score+ap)/2;
    return s ;

}

let final_score = scores(score, ap);
console.log("Final Score: " + final_score);
if (final_score >= 90) {
    console.log("status : Direct Admission");
}
else if (final_score >= 75) {

    console.log("status : Interview Round");

}
else if (final_score >= 50) {
    console.log("status : Waitlisted");

}
else{
    console.log("status : Rejected");
}

//challange4
let as = Number(prompt("enter the attendance score out of 300"));
console.log("Attendance score : " + as);
let task = Number(prompt("enter the task completion score out of 100"));
console.log("Task completion score : " + task);
let project = Number(prompt("enter the project score out of 50"));
console.log("Project score : " + project);

function score(as , task, project){
   let s = ((as/300)*20) + ((task/100)*30) + ((project/50)*50);
}
let sc =score(as, task, project);
if (sc >= 90) {
    console.log("rating : Outstanding");
    
}
else if (sc >= 80) {
    console.log("rating : Excellent");
}
 else if (sc >= 70) {
    console.log("rating : Good");

 }
else {
    console.log("rating : Need Improvement");
}

//challange5
let u = Number(prompt("enter your unit of electricity consumed "));
    let bill = 0;
    if (u <= 100) {
        bill = u * 5;
    } else if (u <= 200) {
        bill = 100 * 5 + (u - 100) * 7;
    } else {
        bill = 100 * 5 + 100 * 7 + (u - 200) * 10;
    }

    let fc= 150;
    let final_bill = bill + fc + ((bill +fc)* 0.18);
    console.log ("Electricity bill : " + bill);
    console.log("Fixed charge : " + fc);
    console.log("GST : " + ((bill +fc)* 0.18));
    console.log("Your electricity bill is: " + final_bill);

    //challange6
    
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

//challange7

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

//challange8

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

//challange9
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

//challange10
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

//challange11
let hr = Number(prompt("Enter hours parked:"));
let bill
console.log("Hours Parked : " +hr);
if (hr <= 2) {
    bill = hr * 20;
    
}
else if(hr<=5){
    bill = 20*2 + (hr - 2) * 30;
}
else {
    bill = 20*2+30*3 + (hr - 5) * 50;
}
 console.log("total parking fee: " +bill);

 //challange12
 let totalRuns = 0;
let highestScore = 0; 
let lowestScore = Infinity; 

for (let i = 1; i <= 10; i++) {
    let runs = Number(prompt("Enter runs scored in match " + i + ":"));
    console.log("Match " + i + ": " + runs + " runs");
    totalRuns += runs;
    highestScore = Math.max(highestScore, runs);
    lowestScore = Math.min(lowestScore, runs);
}

let averageRuns = totalRuns / 10;

console.log("--- Cricket Statistics ---");
console.log("Total Runs    : " + totalRuns);
console.log("Average Runs  : " + averageRuns);
console.log("Highest Score : " + highestScore);
console.log("Lowest Score  : " + lowestScore);

//challange13
for (let i= 1; i<=5; i++){
let row3 = "";

    for(let j =1; j<=i; j++){
        row3 += j;
        
    }
    console.log(row3);
}
console.log();

console.log('pattern 2');

for (let i= 5; i>=1; i--){
let row3 = "";

    for(let j =1; j<=i; j++){
        row3 += j;
        
    }
    console.log(row3);
}
console.log();

console.log('pattern 3');
let height = 5;

for (let i = 1; i <= height; i++) {
    let row = "";

    for (let s = 1; s <= height - i; s++) {
        row += " ";
    }

    for (let st = 1; st <= i; st++) {
        row += "* ";
    }

    console.log(row);
}

//Capston assignment 
let studentName = prompt("Enter Student Name:");
let rollNumber = prompt("Enter Roll Number:");
let course = prompt("Enter Course:");
let yearOfStudy = prompt("Enter Year of Study:");

let math = Number(prompt("Enter Mathematics Marks (out of 100):"));
let physics = Number(prompt("Enter Physics Marks (out of 100):"));
let chemistry = Number(prompt("Enter Chemistry Marks (out of 100):"));
let english = Number(prompt("Enter English Marks (out of 100):"));
let computerScience = Number(prompt("Enter Computer Science Marks (out of 100):"));

let totalMarks = math + physics + chemistry + english + computerScience;
let average = totalMarks / 5;
let percentage = (totalMarks / 500) * 100;

let grade = "";
if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 80) {
    grade = "B";
} else if (percentage >= 70) {
    grade = "C";
} else if (percentage >= 60) {
    grade = "D";
} else {
    grade = "F";
}

let tc = Number(prompt("Enter the total number of classes:"));
let ac = Number(prompt("Enter the total number of classes attended:"));
let attendancePercentage = (ac / tc) * 100;

let examEligibility = "";
if (attendancePercentage >= 75) {
    examEligibility = "Eligible";
} else {
    examEligibility = "Not Eligible";
}

let fi = Number(prompt("Enter the family income:"));

let aps = 0;
let atps = 0;
let fis = 0;

if (percentage >= 75) {
    aps = 1;
}
if (attendancePercentage >= 85) {
    atps = 1;
}
if (fi <= 50000) {
    fis = 1;
}

let scholarshipTotal = aps + atps + fis;

console.log("         STUDENT FINAL REPORT           ");

console.log("   Student Profile  ");
console.log("Name             : " + studentName);
console.log("Roll Number      : " + rollNumber);
console.log("Course           : " + course);
console.log("Year of Study    : " + yearOfStudy);
console.log("");

console.log("   Academic Summary   ");
console.log("Total Marks      : " + totalMarks + " / 500");
console.log("Average          : " + average);
console.log("Percentage       : " + percentage + "%");
console.log("Final Grade      : " + grade);
console.log("");

console.log("   Attendance Summary   ");
console.log("Total Classes    : " + tc);
console.log("Attended         : " + ac);
console.log("Attendance Rate  : " + attendancePercentage.toFixed(2) + "%");
console.log("Exam Status      : " + examEligibility);
console.log("");

console.log("   Scholarship Status   ");
console.log("Family Income    : ₹" + fi);

if (scholarshipTotal === 3) {
    console.log("Status           : Eligible for scholarship");
} else {
    console.log("Status           : Not Eligible for scholarship");
    console.log("Reasons:");
    if (aps === 0) {
        console.log("- Academic percentage is less than 75%");
    }
    if (atps === 0) {
        console.log("- Attendance percentage is less than 85%");
    }
    if (fis === 0) {
        console.log("- Family income is greater than ₹50000");
    }
}
 

