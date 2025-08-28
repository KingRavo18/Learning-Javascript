// DICE ROLLER PROGRAM

function rollDice() {
    const numberOfDice = document.getElementById("numberOfDice"),
          count = parseInt(numberOfDice.value) || 0,
          result = document.getElementById("result"),
          diceContainer = document.getElementById("dice"),
          numberArray = [],
          diceArray = [];

    diceContainer.innerHTML = "";

    if(count < 0 || isNaN(count)) {
        result.textContent = "The number of dice must be a positive number";
        numberOfDice.focus();
        numberOfDice.value = "";
        return;
    }

    if (count === 0) {
        result.textContent = "Please update the number of dice";
        numberOfDice.focus();
        return;
    }

    for(let i = 0; i < count; i++){
        const randomNum = Math.floor(Math.random() * 6) + 1;
        numberArray.push(randomNum);
        diceArray.push(`<img src='../images/${randomNum}.png' alt='Dice showing the number ${randomNum}' >`);
    }

    result.textContent = "Values: " + numberArray.join(", ");
    diceContainer.innerHTML = diceArray.join("");
}


