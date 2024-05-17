// 1.	Write a JavaScript program that prompts the user to enter their age and then displays a message on the console indicating whether they are old enough to vote (consider the legal voting age as 18).

const prompt = require('prompt-sync')();
var age = prompt("Enter your age : ");
if(isNaN(age)){                //check it is an number
    console.log("you are entered Wrong input ,Please run the code aganin !!!");
}
else{
    
     if(age>=18 && age<=120){  //Eligible for voting 
       console.log("Congrats you are eligible for Voting");
     }else{                    // not eligible 
         console.log(`Sorry you are not Eligilbe for Voting: In India you will eligible for Voting after ${18-age}  years`);
     }
}