//13.1. Write a program to sort an array in descending order

const prompt = require("prompt-sync")();
const length=prompt("Enter the size of an Array: ");
const values=prompt(`Enter ${length} values: `)
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
