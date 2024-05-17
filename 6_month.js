//Write a JavaScript program that uses a switch case to accept an input number from the user and output the corresponding month.The program should prompt the user to enter a number representing a month (1 for January, 2 for February, etc.).Then, using a switch case, it should output the name of the month.If the user enters any other number, the program should display "Invalid Entry".
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
