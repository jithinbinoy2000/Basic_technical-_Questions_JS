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
    
}
}