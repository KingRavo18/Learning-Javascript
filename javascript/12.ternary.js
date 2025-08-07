// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse

//let age = 21;
//let message = age >= 18 ? "You're an adult" : "You are not an adult";
//console.log(message);

//let time = 16;
//let greeting = time < 12 ? "Good morning" : "Good afternoon";
//console.log(greeting);

//let isStudent = false;
//let message = isStudent ? "You are a student" : "You are not a student";
//console.log(message);

let purchaseAmount = 100;
let payment = purchaseAmount >= 100 ? purchaseAmount / 100 * 90 : purchaseAmount;
console.log(payment);