function count(n){
    let l = n.length;
    console.log("length of string is: " + l);
    let upper = n.toUpperCase();
    let lower = n.toLowerCase();
    console.log("string in uppercase is: " + upper);
    console.log("string in lowercase is: " + lower);
    let search = word.toLowerCase();
    let contains = lower.includes(search);
    if (contains){
        console.log("the sentence contains the word  "+word);
    }
    else{
        console.log('the sentence does not contain the word '+word);
    }

}

let n = prompt("enter a string");
let word = prompt("enter a word to search");
console.log("sentance  :"+ n);
console.log("word to search :"+ word);
count(n);
