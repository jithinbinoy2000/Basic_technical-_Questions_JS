let count=1
for(let row=1;row<=5;row++){
    let line=""
    for(let col=1;col<+row;col++){//2
        //console.log(`${count}`);
        line+=count+" "
        count++;
    }
    console.log(line);
    //console.log("\n");
}