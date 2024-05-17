//10.Create a JavaScript function to remove duplicate elements from an array without using any built-in methods.
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