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