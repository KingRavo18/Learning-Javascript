// rest parameters = (...rest) allow a function work with a variable
//                   number of argument by bundling them into an array

//                   spread = expands an array into seperate elements
//                   rest = bundles seperate elements into an array
/*
function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburgeur";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

//openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1, 4, 242);

console.log(total);

function avg(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const total = avg(1, 2, 3);
console.log(total);
*/

function combineString(...words){
    return words.join(" ");
}


const fullName = combineString("Mr.", "Spongebob", "Squarepanst", "XIII");
console.log(fullName);