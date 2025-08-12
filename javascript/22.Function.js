// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute the code.

/*
function happyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old!`);
}

happyBirthday("Luca", 25);
happyBirthday("Paul", 23);
happyBirthday("ssas", 223);
*/

function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}
function isEven(num){
   return num % 2 === 0 ? `${num} is even` : `${num} is odd`;  
}
function isValidEmail(email){
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("something@gmail.com"));
console.log(isValidEmail("somethinggmail.com"));