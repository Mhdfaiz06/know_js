// words which do something - keywoords
// word with no meaning - words
// variable - var, let, const - var is old way of declaring variable, let and const are new way of declaring variable   

//let - when value is to be chnaged
// const - when value is not to be changed 

// scope - where the variable is accessible(global scope, block scope, function scope)
// bllock scope - variable is accessible only within the block it is declared in
// let is block scope variable, var is function scope variable



// TEMPORAL DEAD ZONE 
// - the time between the start of the block and the declaration of the variable,
//  where the variable is not accessible
// js knows that a variable is initilized and declared later but it is not accessible until it is declared and initilized

//console.log(a);

//let a = 20;

// Hoisting IMPACT PER TYPE  


// hoisting - when a variable is made : its declareed part is moved to top of the scope and its initiliazation part remain down 
//console.log(b);
//var b =12 ; // will be dividen into two parts - declaration and initialization
// var b; // declaration part is moved to top of the scope
// b = 12; // initialization part remain down
// thats why we can access var b before its declaration but it will be undefined because only declaration part is hoisted not initialization part

// this is called hoisting - when a variable is made : its declareed part is moved to top of the scope and its initiliazation part remain down

// impotant note = var doesnt have tdz but let and const have tdz

// DATA TYPES - premitive data types and non-primitive data types

// premitive data types - values when they are copied , we will get real copy
// number, string, boolean, null, undefined, symbol, bigint 

//reference data types - values when they are copied , we will get reference to the parent value or real value
// array , object, function
// [], {},()
let a = [1,2,3];
let b = a; // b is reference to a- b  not actually an indipendant copy of a , so any chnage in a will reflect in b and any change in b will reflect in a because both a and b are reference to the same array in memory
b.pop(); // this will remove the last element of the array and it will reflect in both a and b because both a and b are reference to the same array in memory

// how to make string 
// "", '', `` - these are three ways to make string in js
// for bigint , add an 'n' at the end of the number to make it a bigint
let z = 1234567890123456789012345678901234567890n;


//reference data types 
// 

//DYNAMIC TYPING - in js we can change the type of a variable at runtime

let  c = 12;
c = true;
c = "hello";

//TYPE COERCION - 
// when we perform an operation on two different types of data, js will try to convert one of the data types to the other data type to perform the operation

"5"+1; // IF ANY OF THE OPERAND IS STRING THEN OTHER OPERAND WILL BE CONVERTED TO STRING AND CONCATENATION WILL HAPPEN

"5"-1; // IF ANY OF THE OPERAND IS NUMBER THEN OTHER OPERAND WILL BE CONVERTED TO NUMBER AND SUBTRACTION WILL HAPPEN

// TRUETHY AND FALSY VALUES

if(12){

}

// 12 isnt any true or false value 
// but in js any value can be treated as true or false in a boolean context

// truethy values - values which are treated as true in a boolean context 
//                 everything except falsy values are truethy values

// falsy values - values which are treated as false in a boolean context
//               0, false, "", null, undefined, NaN


// !! this can be used to convert any value to boolean in console 

// WHY IS NaN TYPE IS NUMBER 
//    js states NaN as a failed number operation and it is of type number because it is a result of a number operation that failed, so it is considered as a number type in js


// OPERATORS IN JS
// 1. Arithmetic operators - +, -, *, /, %, **(exponentiation operator)
// 2. Assignment operators - =, +=, -=, *=, /=, %=, **=
// 3. Comparison operators - ==, ===, !=, !==, >, <, >=, <=
// 4. Logical operators - &&, ||, !
// 5. Bitwise operators - &, |, ^, ~, <<, >>, >>>
// 6. Ternary operator - condition ? expression1 : expression2
// 7. typeof operator - typeof operand
// 8. delete operator - delete object.property

// + operator is used for addition and concatenation

let isadmin = true;
let isloggedin = true;

if(isadmin || isloggedin){
    console.log("welcome admin");
}
else {
    console.log("welcome user");
}

let p= 4;
let q = ++p;
console.log (p,q);


let val =2;

switch(val ){
 case 1:
    break;
 case 2:
    break;
 default:
    break;

}

// rock paper scisors game

let user;
let computer;

function rps(user, computer){
if (user === "rock" && computer === "scissors") return "user wins";
else if (user === "rock" && computer === "paper") return "computer wins";
else if (user === "paper" && computer === "rock") return "user wins";
else if (user === "paper" && computer === "scissors") return "computer wins";
else if (user === "scissors" && computer === "paper") return "user wins";
else if (user === "scissors" && computer === "rock") return "computer wins";
else return "tie";
}

console.log (rps("rock", "scissors"));


// loop - for , while , foreach, do while , for in , for of , 
// for is used when we know the number of iterations we want to perform
// while is used when we dont cknow the number of iterations we want to perform
// do while is used when we want to perform the loop at least once
// for in is used to iterate over the properties of an object
// for of is used to iterate over the values of an iterable object like array, string, map, set, etc

for(start; end ; change);

// Functions

// 

let fnc = function(){// function expression
    console.log("hello");

}

function fnc1(){ //function declaration
console.log('hey 2 ');
}

//fat arrow function - new way of writing function in js

let fnc2 = () => {


}


function dance(){

    console.log("horse dance");

}
 dance();
 

function dance2(val){
 console.log('${val} is dancing');

}                                       //function with parameters
 dance2("horse");
 dance2("dog");
 dance2("cat");


function add(val1, val2){// parameters - values which are passed to the function when it is called
 console.log(val1 + val2);

}
 add(2, 3);// argumets - values passed to the function when it is called
 add(5, 6);


function add2(v1,v2){
 console.log(v1 + v2);

}

add2(); // asnwer would be NaN because v1 and v2 are undefined, undefined + undefined = NaN
add2(2);


function add3(v1 = 0, v2 = 1){// default parameters - if no value is passed to the function, the default value will be used
 console.log(v1 + v2);

}

add3(); // asnwer would be 0+1


//rest parameters - when we want to pass argument value , and there are so manny parameter, we use rest
function abcd(...val){
    console.log(val);

}
abcd(1,2,3,4,5,6,7,8,9); // answer would be [1,2,3,4,5,6,7,8,9] because val is an array which contains all the arguments passed to the function
// val is an array which contains all the arguments passed to the function



//return 


function abcd(v) {

    return 12 + v;

}

let val = abcd(5);
console.log(val);



//first class functions
//functions that can be treated as values, can be assigned to variables, passed as arguments to other functions, and returned from other functions.

function efg(val) {
 val();

}


efg(function() {

    console.log("hello"); // here efg is called , with a function inside as val, inside the function efg , the val is called as a function , ie running the fuction in the argument val() = function() { console.log("hello"); }
});



//higher order functions
 //functions that returns a function or accept a function in its parameter

 function qrst(val){


 }

 qrst(function() {
    console.log("hai"); // //here abcd is higer order function, here qrst is called , with a function inside as val, inside the function qrst , the val is called as a function , ie running the fuction in the argument val() = function() { console.log("hello"); }
});



function xzy(){
     return function() {
        console.log("this is it")

   }
}

xzy()(); // here xzy is called , which returns a function, and then the returned function is called immediately with the second ()



//closures - funtion that retuns a function , and the returning function uses a variable form the parent function


function abc(){
    let a = 12;
    return function(){
        console.log(a); // here abc is called , which returns a function, and then the returned function is called immediately with the second (), and the returned function has access to the variable a from the parent function abc
    }

}


//lexiacal scoping 


function abcde(){
    let a = 12;
    function pqr(){
        let b = 10;
        function xyze(){
          let c = 5;

        }
    }
}



//iife- immediately invoked function expression - a function that is defined and called immediately


(function(){
 console.log("this is an iife"); // here the function is defined and called immediately
})();


//hoisting of functions - the process of moving function declarations to the top of the scope before code execution

abcdef();



function abcdef() {

    console.log("this is a hoisted function"); // here the function abcde is called before its declaration, but it works because of hoisting, the function declaration is moved to the top of the scope before code execution
}


//function expression cant be hoisted 



function getscore(...value){
     let total = 0;
    value.forEach(function(val){
        total += val;
    })
 return total;
}

let score = getscore(10,12,14,15);
console.log(score); // here the function getscore is called with multiple arguments, and the function uses the rest parameter to collect all the arguments into an array, then it uses forEach to iterate over the array and calculate the total score, and finally it returns the total score.



(function(){
    let score = 0;
    return {
        getscore : function(){
            console.log(score);

        },

        setscore : function(val){
            score = val;

        },
        };
    })();

//bmi calculator 


function bmi(weight ,height ){
         return weight / (height * height);
}

console.log(bmi(60, 1.75).toFixed(4));  // here the function bmi is called with weight and height as arguments, and it calculates the bmi using the formula weight / (height * height), and returns the bmi value.



//resusable discount calculator


function discountcalculator (dicount ){
    return function(){
        return pricce - price * (discount/100); 
    };



}
let discounter = discountcalculator(10);
console.log(discounter(2000));      
 // here the function discountcalculator is called with a discount value of 10, and it returns a function that calculates the discounted price based on the original price and the discount value.

 function counter(){
  let count = 0;
  return funtion (){
    count++;
    return count;

  };

 }
let c = counter();
console.log( counter());
console.log( counter());

console.log(c());
console.log(c());








