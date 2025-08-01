// variable = A container that stores a value.
//            Behaves as if it were the value it contains.

// 1. decleration  let x;
// 2. assignment   x = 100;

let x = 123;
console.log(x);

let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(age);
console.log(price);
console.log(gpa);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is ${gpa}`);
console.log(typeof age);

let firstName = "Bobo"; 
let favoriteFood = "Banana";
let email = "bobno123@gmail.com";

console.log(typeof firstName);
console.log(`Your first name is ${firstName}`);
console.log(`Your favorite food is ${favoriteFood}`);
console.log(`Your email is ${email}`);

let online = true;
let forSale = false;
let isStudent = true;

console.log(typeof online);
console.log(`I am online: ${online}`);
console.log(`I this for sale: ${forSale}`);
console.log(`Has he been accepted into collage: ${isStudent}`);

let fullName = "Bobby Browm";
let Age = 25;
let Student = false;

document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent = `${age} years old`;
document.getElementById("p3").textContent = `Is student: ${Student}`;