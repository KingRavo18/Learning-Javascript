// destructuring = extract values from arrays and objects
//                 then assign them to variables inn a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring


// EXAMPLE 1
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);

// EXAMPLE 2
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "blue", "yellow", "white"];

[colors[0], colors[3]] = [colors[3], colors[0]];

console.log(colors);

// EXAMPLE 3
// ASSIGN ARRRAY ELEMENTS TO VARIABLES

const color = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = color;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// EXAMPLE 4
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry cook",
}
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const {firstName, lastName, age, job="Unemployed"} = person2;

console.log(firstName, lastName, age, job);

// EXAMPLE 5
// DESCTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(job);
}

displayPerson(person1);

