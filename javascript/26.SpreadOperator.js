// spread operator = ... allows an iterable such as an 
//                   array or string to be expanded
//                   into seperate elements
//                   (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];
let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log(min);

let username = "Bobby brown";
let letters = [...username].join("-");

console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "pancakes"];

console.log(foods);