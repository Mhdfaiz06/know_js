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
