// variable scope = where a variable is recognized
//                  and accessible (local vs global)

let x = 3;

function function1(){
    let x = 1;
    console.log(x);
}
function function2(){
    let y = 4;
    console.log(y);
}
function1()
function2()