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