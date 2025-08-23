
const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];


fruits.push({name: "grapes", color: "purple", calories: 62});
fruits.pop();

console.log(fruits);

// forEach()

fruits.forEach(element => console.log(element.name));

// map()

const displayFruitNames = fruits.map(element => element.name);
const displayFruitColors = fruits.map(element => element.color);
const displayFruitCal = fruits.map(element => element.calories);

console.log(displayFruitCal);

// filter()

const isYellow = fruits.filter(element => element.color === "yellow");
const lowCal = fruits.filter(element => element.calories < 100);
const highCal = fruits.filter(element => element.calories >= 100);

console.log(isYellow);
console.log(lowCal);
console.log(highCal);

// reduce()


const maxCal = fruits.reduce((max, nextFruit) => nextFruit.calories > max.calories ? nextFruit : max);
const minCal = fruits.reduce((min, nextFruit) => nextFruit.calories < min.calories ? nextFruit : min);


console.log(minCal);