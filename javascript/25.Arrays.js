// array = a variable like structure that can hold
//         more than 1 value


let fruits = ["apple", "orange", "banana"];

fruits.sort().reverse();

/*
//fruits.push("coconut"); // inserts a value at the end
//fruits.pop(); // gets rid of the last value in an array
//fruits.unshift("coconut"); // inserts a value at the start
fruits.shift(); //removes a value from the beginning

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
*/

//let numOfFruits = fruits.length;
//let index = fruits.indexOf("apple");

for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}
for(let fruit of fruits){
    console.log(fruit);
}