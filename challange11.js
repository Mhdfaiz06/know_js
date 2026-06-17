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
