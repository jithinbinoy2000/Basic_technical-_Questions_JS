 /*19.Income tax is calculated as per the following table 
Up to 2.5 Lakhs -No Tax
Above 2.5 Lakhs to 5 Lakhs-5%
Above 5 Lakhs to 10 Lakhs-20%
Above 10 Lakhs to 50 Lakhs-30%
Write a program to find out the income tax amount of a person.
a.Program should accept annual income of a person
Output the amount of tax he has to pay
Eg :Enter the annual income:495000--Income tax amount = 24750.00*/
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