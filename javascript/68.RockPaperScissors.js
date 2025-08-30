// ROCK PAPERS SCISSORS

const options = ["rock", "paper", "scissors"]; 
const result = document.getElementById("result");
let gameResult = "";
let playerPoints = 0;
let computerPoints = 0;


function game(playerChoice){
    const computerChoice = options[Math.floor(Math.random() * 3)];
    if(playerChoice === computerChoice){
        gameResult = "It's a draw!";
    }else{
        switch(playerChoice){
            case "rock":
                gameResult = computerChoice === "scissors" ? "You win!" : "You lose!";
                break;
            case "paper":
                gameResult = computerChoice === "rock" ? "You win!" : "You lose!";
                break;
            case "scissors":
                gameResult = computerChoice === "paper" ? "You win!" : "You lose!";
                break;
        }
    }

    document.getElementById("yourChoice").textContent = `Your choice: ` + playerChoice;
    document.getElementById("computerChoice").textContent = `Computer choice: ` + computerChoice;
    result.textContent = gameResult;
    result.classList.remove("greenText", "redText");

    if(gameResult === "You win!"){
        result.classList.add("greenText")
        playerPoints++;
    }
    if(gameResult === "You lose!"){
        result.classList.add("redText")
        computerPoints++; 
    }

    document.getElementById("yourPoints").textContent = `You: ` + playerPoints;
    document.getElementById("computerPoints").textContent = `Computer: ` + computerPoints;
};

