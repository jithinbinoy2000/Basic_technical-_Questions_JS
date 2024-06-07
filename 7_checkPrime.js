//7.Write a JavaScript function to check if a given number is prime or not.
// a prime number only has two factors ; itself and 1
// 17/1=17 and 17/17=1
const prompt= require("prompt-sync")();
const number =prompt("Enter the number to check : ")
var isPrime=false;

if(isNaN(number)){
    console.log("Enter a valid Number");
}else{
for(i=2;i<=number-1;i++){
    if(number%i==0){
        isPrime=true;
        break
    }
}
if(isPrime==true){
    console.log("Given number is not a prime");
}else{
    console.log("given number is a Prime");
}
}