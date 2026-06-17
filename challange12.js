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