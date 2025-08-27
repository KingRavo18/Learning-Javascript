// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ------------- .firstElementChild -------------
/*
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "lightgreen";
});
*/

// ------------- .lastElementChild -------------
/*
const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "red";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "lightblue";
});
*/

// ------------- .nextElementSibling -------------

//document.getElementById("apple").nextElementSibling.style.backgroundColor = "blue";

// ------------- .previousElementSibling -------------

//document.getElementById("banana").previousElementSibling.style.backgroundColor = "pink";

// ------------- .parentElement -------------

//document.getElementById("apple").parentElement.style.backgroundColor = "pink";

// ------------- .children -------------

const element = document.getElementById("fruits").children;

Array.from(element).forEach(fruit => {
    fruit.style.backgroundColor = "pink";
});

