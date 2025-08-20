// funciton declaration = define a reusable block of code
//                        that performs a speific task

function hello(){
    console.log("Hello");
}


// function expressions = a way to define functionss as values
//                        or variables

const hello2 = function(){
    console.log("Hello");
}


//setTimeout(callback, 3000);

setTimeout(function(){
    console.log("Hello");
}, 3000);

const numbers = [1, 2, 3, 4, 5, 6]
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});
const even = numbers.filter((element) => {
    return element % 2 === 0;
});
const odd = numbers.filter((element) => {
    return element % 2 !== 0;
});
const reduce = numbers.reduce((nine, ten) => {
    return nine + ten;
});

console.log(reduce);
