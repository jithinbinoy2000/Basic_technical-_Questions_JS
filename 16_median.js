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