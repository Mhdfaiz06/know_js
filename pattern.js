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