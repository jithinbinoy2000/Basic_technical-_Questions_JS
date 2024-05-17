
1.Write a JavaScript program that prompts the user to enter their age and then displays a message on the console indicating whether they are old enough to vote (consider the legal voting age as 18).
Code of the program & screenshot of the output.
--------code----------
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
    } }

2.Write a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers in the array.
Code of the program & screenshot of the output.
const prompt= require('prompt-sync')(); //import prompt sync
 let inputArray=[]
 const input =prompt("enter your digits and seperate the number by commas or spaces : ")
inputArray=input.split(','&&" ") // convert into array items by spliting by seprators
console.log(inputArray.lenght<0?`Please enter your array elements`:`your array is : ${inputArray}`);

let sum=0;
for(index=0;index<inputArray.length;index++){
    sum+=Number(inputArray[index])//avoid Concadination
} console.log(sum);


3.Write a JavaScript program to calculate the area of a rectangle.The program should accept two inputs from the user: the length and width of the rectangle.Then, it should calculate the area using the formula: Area = Length * Width.Display the calculated area on the console.
Code of the program & screenshot of the output.
const prompt=require('prompt-sync')();
const length =prompt("Enter your Length : "); //get length value
const width = prompt("Enter your Width : ");  // get width value
//check the value is valid

if( isNaN(width) ||isNaN(length)){
    console.warn("The Entered measurement is not valid , Please try again !!!")
   }else{
        const area = length*width
        console.log(length<0 || width <0?`The messurment is negative so & area is ${area}`:`Area of give rectangle is ${area}`);
   }


4.Write a JavaScript program to convert temperature from Celsius to Fahrenheit.The program should prompt the user to enter a temperature in Celsius.Then, it should convert the temperature to Fahrenheit using the formula: F=9/5c+32.Display the converted temperature in Fahrenheit on the console, rounded to two decimal places.
Code of the program & screenshot of the output.

const prompt= require('prompt-sync')();
const inputTemp = prompt(`enter the temperature in °C : `) 
const Fahrenheit_temp = ((9/5)*inputTemp)+32;
console.log(`-------------${inputTemp}°C is also ${Math.round(Fahrenheit_temp*100)/100}°F-------------`);
5. Write a program to show the grade obtained by a student after he/she enters their total mark percentage.
Program should accept an input from the user and display their grade as follows
Mark
Grade
> 90
A
80-89
B
70-79
C
60-69
D
50-59
E
< 50
Failed

Code of the program & screenshot of the output.
const prompt= require("prompt-sync")();
const perc = prompt("Enter your Total mark percentege : ")
    var grade=""
    switch(true){
        case perc>=90 && perc<=100 :
             grade="A";
             break;
        case perc>=80 && perc<=89 :
            grade="B";
            break;
        
        case perc>=70 && perc<=79 :
            grade="C";
            break;
            case perc>=60 && perc<=69 :
            grade="D";
            break;
        case perc>=50 && perc<=59 :
            grade="E";
            break;
        case perc>=50:
            grade=" F"
            break;
    }
    console.log(perc<=50?`Your grade is F : means FAILED, better luck next time !!!`:`congragulation !!! your grade is ${grade}`);

6.Write a JavaScript program that uses a switch case to accept an input number from the user and output the corresponding month.The program should prompt the user to enter a number representing a month (1 for January, 2 for February, etc.).Then, using a switch case, it should output the name of the month.If the user enters any other number, the program should display "Invalid Entry".
Code of the program & screenshot of the output.
const prompt= require("prompt-sync")();
const input=prompt(" 1.january\n 2.february\n 3.March\n 4.April\n 5.May\n 6.June\n 7.July\n 8.August\n 9.Spetember\n 10.October\n 11.November\n 12.December\n \n Enter your month in Number format: ")

switch(true){
    case input==1: 
         console.log(`${input}: january`);
         break;
    case input==2:
        console.log(`${input}: February`);
        break;
    case input==3:
        console.log(`${input}: March`);
        break;
    case input==4:
        console.log(`${input}: April`);
        break;
    case input==5:
        console.log(`${input}: May`);
        break;
    case input==6:
        console.log(`${input}: June`);
        break;
    case input==7:
        console.log(`${input}: July`);
        break;
    case input==8:
        console.log(`${input}: August`);
        break;
    case input==9:
        console.log(`${input}: September`);
        break;
    case input==10:
        console.log(`${input}: October`);
        break;
    case input==11:
        console.log(`${input}: November`);
        break;
    case input==12:
        console.log(`${input} : December`);
        break;
    default:
        console.log("Invalid Entry");
}

7.Write a JavaScript function to check if a given number is prime or not.
Code of the program & screenshot of the output.
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
    }}

8.Create a program to find the factorial of a given number using recursion in JavaScript.

Code of the program & screenshot of the output.
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

9.Implement a JavaScript function to reverse a string without using the built-in reverse() method
Code of the program & screenshot of the output.
const prompt=require("prompt-sync")();
const Qstring=prompt("Enter a string : ")
var newString=""
for(index=Qstring.length-1;index!==-1;index--){
    
    newString+=Qstring[index]
}
console.log(`${Qstring} reversed to newArray ${newString}`);

10.Create a JavaScript function to remove duplicate elements from an array without using any built-in methods.
Code of the program & screenshot of the output.
const prompt=require("prompt-sync")();
const input=prompt("Enter your elememts in an array: ")
const Qarray =input.split(" ")

let length = Qarray.length-1;
let Aarray=[]

for(let i=0;i<=length;i++){ 
    let result=false;
    for(let j=i+1;j<=length;j++){
           // console.log(Qarray[i],Qarray[j]);
            if(Qarray[i]===Qarray[j]){
               result=true;
               break;
            }else{
                result=false;
            }
    }
    if(result==false){
        //console.log(!result); console.log(Qarray[i]);
        Aarray.push(Qarray[i]);
        }   
}
console.log(`sorted array is ${Aarray}`);

11. Write a function in JavaScript to check if a given string is a palindrome or not.
Code of the program & screenshot of the output.
const prompt = require('prompt-sync')();
var qString=prompt("Enter a word to  check : '\x1b[43m'")
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

12. Write a program to sort an array in descending order
a.Program should accept and array, sort the array values in descending order and display it
Eg: Output: Enter the size of an array
Input: 5
Output: Enter the values of array
Input: 20, 10, 50, 30, 40
Output: Sorted array:
50, 40, 30, 20, 10
Code of the program & screenshot of the output.
//13.1. Write a program to sort an array in descending order

const prompt = require("prompt-sync")();
const length=prompt("Enter the size of an Array");
const values=prompt(`Enter ${length} values`)
const Qarray=values.split(",")
if(Qarray.length==length){
    swap(Qarray);
}else{
    console.log(`elements are not equal to the length`);
}

function swap(Qarray){
    let temp=[]
    //const Qarray=["9","5","4","7","3"]
                  // 0   1   2   3   5
    //finding largest element
    for(let i=0;i<=length;i++){
        for(let j=i+1;j<=length;j++){
        if(Qarray[i]>Qarray[j]){
            //swap
        temp=Qarray[i]
        Qarray[i]=Qarray[j]
        Qarray[j]=temp;
        }
      }   
    }
    console.log(`Sorted Array is : ${Qarray}`);
}

13.Can you describe how you would implement a binary search algorithm in JavaScript to efficiently find a specific element within a sorted array? Please provide a step-by-step explanation of the algorithm and then demonstrate how you would translate this into JavaScript code.
Answer here
step1: start
         : search_item= num
step2: sort the array in accending order
step3:get the middle element  (find half length of array :if even number take rounded)
step 4: check while num equal to / lessthan / greaterthan
condition 5.1: if equal return result
condition 5.2:if num is num is greater than middle element
                   5.2.1 : find next center element between start to middle
                   5.2.2 : step4
condition 5.3: :if num is num is lesserthan than middle element
                   5.2.1 : find next center element between middle to end
                   5.2.2 : step4

step5 : if  the conditions are not statisfied return num is not avilable

eg:
num=5
 step2: arr=[1,2,3,4,5]
step3: middle=3
step4:5>3
    4.1: middle=4
step4:5>4
      4.1: middle=5
step4:5=5
return num is found at arr[middle] ------middle index
ans: 5 id found at the index of 4
const arr=[1,2,3,4,5];
let num=5;
let firstIndex=0;
let lastindex=arr.length-1
while(firstIndex<=lastindex){
    let middle=Math.floor((firstIndex+lastindex)/2);
    if(arr[middle]===num){
    console.log(`founed at ${middle+1} position`);
    break;
}
else if(arr[middle]<num){
    firstIndex=middle+1
}
else if(arr[middle]>num){
    lastindex=middle-1
    
}}
PS C:\Users\user\OneDrive\Desktop\Learning\Internship> node 13_binarySearch.js
founed at 5 position
14.Create a JavaScript function to find the intersection of two arrays.
Code of the program & screenshot of the output.
var arr1=["1","2","3","4"]
var arr2=["4","5","3","2"]
let temp =[]
for(let i=0;i<=arr1.length-1;i++){
    
    for(let j=0;j<=arr2.length;j++){
        if(arr1[i]==arr2[j]){
            temp.push(arr1[i])
        }else null
    }
}
console.log(temp);

15.  Describe about axios .
Answer here.
AXIOS is a library used for API calls
it supports promise api,
returns :resolved in then key word
             : failed in catch keyword
it convert data automatically to JSON


16.Implement a JavaScript function to calculate the median of an array of numbers.
Code of the program & screenshot of the output.
const prompt = require('prompt-sync')();
const input=prompt("enter the array elements by spacing: ")
inputArray=input.split(" ")
inputArray.sort((a,b)=>a-b)
console.log(`Given array is [${inputArray}]`);
if(inputArray.length%2!==0){
    let index=Math.floor(inputArray.length/2)
    console.log(`Median of given array is ${inputArray[index]}`);
}
else{
    let firstitem = inputArray[inputArray.length/2];
    let seconditem=inputArray[(inputArray.length/2)+1];
    sum=(Number(firstitem)+Number(seconditem))/2
    console.log(`Median of given array is ${sum}`);
}

17. Write a JavaScript program that acts as a simple calculator. It should display a menu to the user with options for addition, subtraction, multiplication, and division. The program should then prompt the user to enter two numbers and perform the selected operation. Implement this using functions and a switch statement.
Code of the program & screenshot of the output.
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



18.Grades are computed using a weighted average. Suppose that the written test counts 70%,  lab exams 20% and assignments 10%.
If Arun has a score of
Written test = 81
Lab exams = 68
Assignments = 92
Arun’s overall grade = (81x70)/100 + (68x20)/100 + (92x10)/100 = 79.5
 Write a program to find the grade of a student during his academic year. 
a.Program should accept the scores for written test, lab exams and assignments
b.Output the grade of a student (using weighted average)
Eg:
Enter the marks scored by the students
Written test = 55
Lab exams = 73
Assignments = 87
Grade of the student is 61.8 
Code of the program & screenshot of the output.
const prompt=require("prompt-sync")();
const written=prompt("Written test : ")
const lab=prompt("Lab test     : ")
const assignments=prompt("Assignment   : ")

const grade= (written*70)/100 + (lab*20)/100 + (assignments*10)/100
console.log(`Grade of the student is ${grade}%`);

19.Income tax is calculated as per the following table 
Annual Income
Tax percentage
Up to 2.5 Lakhs 
No Tax
Above 2.5 Lakhs to 5 Lakhs
5%
Above 5 Lakhs to 10 Lakhs
20%
Above 10 Lakhs to 50 Lakhs
30%
Write a program to find out the income tax amount of a person.
a.Program should accept annual income of a person
Output the amount of tax he has to pay

Eg 1:
Enter the annual income
495000
Income tax amount = 24750.00

Eg 2:

Enter the annual income
500000
Income tax amount = 25000.00
Code of the program & screenshot of the output.
const prompt=require("prompt-sync")();
const amount=prompt("Enter the annual income : ")
let per=0;
switch(true){
    case (amount<=250000):
        console.log("No tax");
        break;
    case (amount<=500000 && amount>250000):
        per=5
        cal(amount,per);
        break;
    case (amount<=1000000 && amount>500000):
        per=20
        cal(amount,per);
        break;
     case (amount<=50000000 && amount>1000000):
        per=30
        cal(amount,per);
        break;
}
function cal(amount,per){
    let tax=(amount*per)/100;
    console.log(`Income Tax Amount : ${tax.toFixed(2)}`);//tofixed for decimal points
}

20.Write a program to print the following pattern using for loop
1
2	3
4	5	6
7	8	9	10

Code of the program & screenshot of the output.
let count=1
for(let row=1;row<=5;row++){
    let line=""
    for(let col=1;col<+row;col++){//2
        //console.log(`${count}`);
        line+=count+" "
        count++;
    }
    console.log(line);
    //console.log("\n");
}






