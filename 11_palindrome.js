//Write a function in JavaScript to check if a given string is a palindrome or not
const prompt = require('prompt-sync')();
var qString=prompt("Enter a word to  check : ")
qString=qString.toLowerCase();

//m a l a y a l a m
//0 1 2 3 4 5 6 7 8 

let length =qString.length
let result=false;
for(let i=0;i<=Math.floor(qString.length/2);i++){
    if(qString[i]!==qString[length-1]){
        result=false;
        break;
    }
    else{
        length--;
        result=true;
    }
}
if(result==true){
    console.log("given string is a palindrome");
}else{
    console.log("given string is not a palindrome");
}
console. log();