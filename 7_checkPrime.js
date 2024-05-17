//7.Write a JavaScript function to check if a given number is prime or not.
// a prime number only has two factors ; itself and 1
// 17/1=17 and 17/17=1
const prompt= require("prompt-sync")();
const number =prompt("Enter the number to check : ")
if(isNaN(number)){
    console.log("Enter a valid Number");
}else{
    if(number==0){
        console.log("0 is neither prime nor composite");
    }else{
        if(number/1==number && number/number==1){ //checking definition
            if(number%2==0 || number%3==0){       // checking traped composite function
                console.log(`${number} is a composite number`);
            }else{
                console.log(`${number} is a prime number`);
            }   
        }else{
            null
        }
    }
}