//Write a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers in the array.


const prompt= require('prompt-sync')(); //import prompt sync
 let inputArray=[]
 const input =prompt("enter your digits and seperate the number by  spaces : ")
inputArray=input.split(','&&" ") // convert into array items by spliting by seprators
console.log(inputArray.lenght<0?`Please enter your array elements`:`your array is : ${inputArray}`);

let sum=0;
for(index=0;index<inputArray.length;index++){
    sum+=Number(inputArray[index])//avoid Concadination
}
console.log(`sum of given array is ${sum}`);