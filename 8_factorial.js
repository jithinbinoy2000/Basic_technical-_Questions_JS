//8.Create a program to find the factorial of a given number using recursion in JavaScript.
const prompt = require('prompt-sync')();
const number = prompt(" Enter the Number : ")
var factorial = 1;
isNaN(number)?console.log("Invalid Input"):find(number)
function find(number){
    factorial=number*factorial
    number--;
    if(number==0){ //recursion 
        console.log(`factorial is ${factorial}`);
    }else{
        find(number)
    }
}
