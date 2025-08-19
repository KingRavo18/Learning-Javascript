// forEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element

//             array.forEach(callback)
//             element, index, array are provided

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(cubed);
numbers.forEach(displayNumber);

function double(element, index, array) {
    array[index] = element * 2;
}

function triple(element, index, array) {
    array[index] = element * 3;
}

function square(element, index, array) {
    array[index] = element ** 2;
}

function cubed(element, index, array) {
    array[index] = element ** 3;
}

function displayNumber(element) {
    console.log(element);
}

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(firstLetter);
fruits.forEach(displayFruit);

function uppercase(element, index, array) {
    array[index] = element.toUpperCase(); 
}

function lowerCase(element, index, array) {
    array[index] = element.toLowerCase(); 
}

function firstLetter(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1); 
}

function displayFruit(element) {
    console.log(element);
}