// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

// ADD HTML/CSS PROPERTIES

/*
buttons.forEach(button => {
    button.style.backgroundColor = "red";
    button.textContent += "😊";
});
*/

// CLICK event listener

/*
buttons.forEach(button => {
    button.addEventListener("click", event => event.target.style.backgroundColor = "green");
});
*/

// MOUSEOVER + MOUSEOUT event listener

/*
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "yellow";
    })
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "rgb(17, 178, 236)";
    })
})
*/

// ADD AN ELEMENT

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";

document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");



// REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});