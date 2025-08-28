// eventListener = Listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback);


const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");


/*
myBox.addEventListener("click", () => {
    myBox.style.backgroundColor = myBox.style.backgroundColor === "red" ? "blue" : "red";
});
*/

/*
function changeColor(event) {
    if(event.target.style.backgroundColor === "tomato"){
        event.target.style.backgroundColor = "lightgreen";
        event.target.textContent = "CLICK ME 😊"
    }else{
        event.target.style.backgroundColor = "tomato";
        event.target.textContent = "Nooooo! 😑"
    }
}
*/

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Ouch! 🤕"
}); 

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Nooooo! 😑"
});

myButton.addEventListener("mouseout", event => {
        myBox.style.backgroundColor = "green";
        myBox.textContent = "Thank you";
    setTimeout(() => {
        myBox.style.backgroundColor = "lightgreen";
        myBox.textContent = "CLICK ME 😊";
    }, 800)
});