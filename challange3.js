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