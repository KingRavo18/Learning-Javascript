// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById()         // ELEMENT OR NULL
// 2. document.getElementByClassName()  // HTML COLLECTION
// 3. document.getElementByTagName()    // HTML COLLECTION
// 4. document.querySelector()          // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()       // NODELIST

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "red";

const fruits = document.getElementsByClassName("fruits");
fruits[2].style.backgroundColor = "yellow";

/*
for(let fruit of fruits){
    fruit.style.backgroundColor = "blue";
}
*/

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

Array.from(h4Elements).forEach(h4 => {
    h4.style.backgroundColor = "lightgreen";
});

/*
h4Elements[1].style.backgroundColor = "Yellow";

for(let h4 of h4Elements){
    h4.style.backgroundColor = "red";
}

for(let li of liElements){
    li.style.backgroundColor = "purple";
}
*/

const element = document.querySelector(".fruits");

element.style.backgroundColor = "red";

const foods = document.querySelectorAll("li");

foods[0].style.backgroundColor = "lightblue";

foods.forEach(food => {
    food.style.backgroundColor = "lightblue";
});