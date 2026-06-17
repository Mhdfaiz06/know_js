let prices = [];
let quantity = [];
let totalitem = [];

let no = Number(prompt("enter the number of items"));
console.log("number of items : " + no);
for(let i = 1; i<=no; i++){

    let p = Number(prompt("enter the price of item " + i));
    let q = Number(prompt("enter the quantity of item " + i));

    prices.push(p);
    quantity.push(q);
    totalitem.push(p*q);
    console.log("price of item " + i + " : " + p);
    console.log("quantity of item " + i + " : " + q);
    console.log("total price of item " + i + " : " + (p*q));
}
let subtotal =0;

totalitem.forEach(function (val){
    subtotal += val;
});
console.log("Subtotal : " + subtotal);

let gst= subtotal * 0.18;
console.log("GST : " + gst);
let total = subtotal + gst;
console.log("Total : " + total);

