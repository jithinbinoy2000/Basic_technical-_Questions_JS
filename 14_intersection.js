//14.Create a JavaScript function to find the intersection of two arrays.
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