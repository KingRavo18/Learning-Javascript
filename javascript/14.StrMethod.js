// string methods = allow you to manipulate and work with text (strings)

let userName = "Bro Code";

console.log(userName.charAt(0));
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));
console.log(userName.length);
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(4));
let result = userName.startsWith(" "); //returns true or false
console.log(result);
result = userName.endsWith(" ");//returns true or false
console.log(result);
result = userName.includes(" ");//returns true or false
console.log(result);

userName = userName.trim();
console.log(userName);

let phoneNumber = "123-545-67";

phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber)
//phoneNumber = phoneNumber.padStart(15, "0");
//console.log(phoneNumber)
phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber)


