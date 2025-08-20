// arrow functions = a concise way to write function expressions
//                   good for simple functtions that you use only once
//                   (parameters => some code)

const hello2 = (name, age) => {
    console.log(`Hello, ${name}`);
    console.log(`You are ${age} years old`);
}

hello2("Bob", 56);

setTimeout(() => console.log("Hello"), 3000);

function hello(){
    console.log("Hello");
}

const numbers = [1, 2, 3, 4, 5, 6]
const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const even = numbers.filter((element) => element % 2 === 0);
const odd = numbers.filter((element) => element % 2 !== 0);
const reduce = numbers.reduce((nine, ten) => nine + ten);

console.log(squares);
console.log(cubes);
console.log(even);
console.log(odd);
console.log(reduce);