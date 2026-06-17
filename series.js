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


 