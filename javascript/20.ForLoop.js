// for loop = repeat some code a LIMITED amount of times
/*
for(let i = 10; i > 0; i-=2){
    console.log(i);
}

console.log("Happy New Year");
*/
for(let i = 1; i <= 20; i++){
    if(i == 13){
        //continue; //Continue will skip this loop cycle
        break; //break leaves the loop entirely
    }else{
        console.log(i);
    }
}