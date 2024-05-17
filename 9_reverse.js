//9.Implement a JavaScript function to reverse a string without using the built-in reverse() method
const prompt=require("prompt-sync")();
const Qstring=prompt("Enter a string : ")
var newString=""
for(index=Qstring.length-1;index!==-1;index--){
    
    newString+=Qstring[index]
}
console.log(`${Qstring} reversed to newArray ${newString}`);