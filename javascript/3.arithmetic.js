// arithmetic operations = operands (values, variables, etc.)
//                         operators (+ - * /)
//                         example: 11 = x + 5

let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2; //students to the power of two
//let extraStudents = students % 2; // shows off the remainder

//SHORTER

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students++; //increments by 1
//students--; //decrements by 1
//console.log(students);

/*
    operator precendence
    1. paranthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/

//let result = 1 + 2 * 3 + 4 ** 2;
//let result = 12 % 5 + 8 / 2;
let result = 6 / 2 ** (2 + 5);

console.log(result);
