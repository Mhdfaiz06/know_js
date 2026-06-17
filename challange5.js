let u = Number(prompt("enter your unit of electricity consumed "));
    let bill = 0;
    if (u <= 100) {
        bill = u * 5;
    } else if (u <= 200) {
        bill = 100 * 5 + (u - 100) * 7;
    } else {
        bill = 100 * 5 + 100 * 7 + (u - 200) * 10;
    }

    let fc= 150;
    let final_bill = bill + fc + ((bill +fc)* 0.18);
    console.log ("Electricity bill : " + bill);
    console.log("Fixed charge : " + fc);
    console.log("GST : " + ((bill +fc)* 0.18));
    console.log("Your electricity bill is: " + final_bill);