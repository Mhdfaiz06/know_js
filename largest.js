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