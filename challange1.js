let ap = Number(prompt('enter the acadamic percentage'));
let atp = Number(prompt('enter the attendance percentage'));
let fi = Number(prompt('enter the family income'));
console.log('Academic Percentage : ' + ap);
console.log('Attendance Percentage : ' + atp);
console.log('Family Income : ' + fi);
let e= true;
let aps =0;
let  atps = 0;
let fis =0;
if (ap >= 75){
     
     aps = 1;
}

if(atp >= 85){
    
    atps = 1;
}

 if(fi <= 50000){
    fis = 1;
 }   

let total = aps + atps + fis;
if (total == 3){
    console.log('Eligible for scholarship');
}
else{
    console.log('Not Eligible for scholarship due to the following reasons :');
    if (aps === 0) {
        console.log('- Academic percentage is less than 75');
    }
    if (atps === 0) {
        console.log('- Attendance percentage is less than 85');
    }
    if (fis === 0) {
        console.log('- Family income is greater than 50000');
    }
}
