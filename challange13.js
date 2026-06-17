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