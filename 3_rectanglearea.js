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
 