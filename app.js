function odd(n){
    if (n % 2 == 0){
        console.log('even');
        check(n);
    

    }
    else{
        console.log('odd');
        check(n);
    }
    
}

function check(n){
    if (n > 0){
        console.log('positive');
    }
    else if (n < 0){
        console.log('negative');
    }
    else{
        console.log('zero');
    }
}

let a = Number(prompt('enter a number '));
console.log(a);0
odd(a);
