// eventListener = Listen for specific events to create interactive web pages
//                 events: keydown, keyup
//                 document.addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

/*
document.addEventListener("keydown", event => {
    console.log(`Key down = ${event.key}`);
});

document.addEventListener("keyup", event => {
    console.log("You released me");
});
*/

/*
document.addEventListener("keydown", event => {
    myBox.textContent = "🤕";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
    myBox.textContent = "😊";
    myBox.style.backgroundColor = "lightgreen";
});
*/

document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){

        myBox.textContent = "🤕";
        myBox.style.backgroundColor = "tomato";

        event.preventDefault();

        switch(event.key){
            case "ArrowUp": 
                y -= moveAmount;
                break;
            case "ArrowDown": 
                y += moveAmount;
                break;
            case "ArrowRight": 
                x += moveAmount;
                break;
            case "ArrowLeft": 
                x -= moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});

document.addEventListener("keyup", event => {
    myBox.textContent = "😊";
    myBox.style.backgroundColor = "lightgreen";
});