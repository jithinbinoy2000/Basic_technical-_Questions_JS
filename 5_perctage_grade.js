//Write a program to show the grade obtained by a student after he/she enters their total mark percentage.
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
