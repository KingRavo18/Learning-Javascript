// CALCULATOR

const display = document.getElementById("display");

const addToDisplay = (input) => display.textContent += input;
const clearDisplay = () => display.textContent = "";

function calculations(){
    try {
        display.textContent = eval(display.textContent);
        if(display.textContent = Infinity){
            throw new Error();
        }
    } catch(error){
        display.textContent = "ERROR";
    }
}