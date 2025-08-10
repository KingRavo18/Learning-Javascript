// Method Chaining = Calling one method after another
//                   in one continuous line of code.

let username = window.prompt("Enter your username");

// ----- NO METHOD CHAINING -----
/*
username = username.trim();
let firstLetter = username.charAt(0);
firstLetter = firstLetter.toUpperCase();
let otherLetters = username.slice(1);
otherLetters = otherLetters.toLowerCase();

username = firstLetter + otherLetters;
console.log(username);
*/
// ----- METHOD CHAINING -----

username = username.trim().charAt(0).toUpperCase() + 
username.slice(1).toLowerCase();
console.log(username);
