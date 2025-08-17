// DICE ROLLER PROGRAM

function DiceRoller() {
    const diceAmount = document.getElementById("DiceAmount").value;
    const diceDisplay = document.getElementById("diceBox");
    const valueDisplay = document.getElementById("displayedValues");
    const dice = [];
    const values = [];

    for(let i = 1; i <= diceAmount; i++){
        const rollResult = Math.floor(Math.random() * 6) + 1;
        values.push(rollResult);
        dice.push(`<img src="../images/${rollResult}.png" alt="Dice ${rollResult}"/>`);
    }
    valueDisplay.textContent = values.join(", ");
    diceDisplay.innerHTML = dice.join(" ");
}