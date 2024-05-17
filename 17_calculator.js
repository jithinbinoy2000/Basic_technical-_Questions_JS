//Write a JavaScript program that acts as a simple calculator. It should display a menu to the user with options for addition, subtraction, multiplication, and division. The program should then prompt the user to enter two numbers and perform the selected operation. Implement this using functions and a switch statement.
const prompt=require("prompt-sync")();
const operators = prompt(" 1-> Addition\n 2-> Substraction\n 3-> Multiplication\n 4-> Division\n Enter your Operator Number :");
const num1 = prompt(" Enter the First Number: ");
const num2 = prompt("Enter the Second Number: ");

switch(true){
    case operators==1:{
        console.log(addition(num1,num2));
        break;
    }
    case operators==2:{
        console.log(substraction(num1,num2));
        break;
    }
    case operators==3:{
        console.log(multiplication(num1,num2));
        break;
    }
    case operators==4:{
        if(num1==0 || num2==0){
            console.log(`Cant divisible by zero: ${division(num1,num2)}`)
        }
        else{
            console.log(division(num1,num2));
        }
       
        break;
    }
    default:{
        console.log(" Invalid Entry");
        break;
    }
}
function addition(num1,num2){return Number(num1)+Number(num2)}
function substraction(num1,num2){return Number(num1)-Number(num2)}
function multiplication(num1,num2){return Number(num1)*Number(num2)}
function division(num1,num2){return Number(num1)/Number(num2)}


