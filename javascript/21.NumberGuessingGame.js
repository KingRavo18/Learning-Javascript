// NUMBER GUESSING GAME

const maxNumber = 100;
const minNumber = 1;
const randomNum = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let attempts = 0;
let guess;
let isRunning = true;

    while(isRunning){
        guess = Number(window.prompt(`Guess the number between ${minNumber} and ${maxNumber}`));
        if(isNaN(guess)){
            window.alert("Please enter a valid number");
        }else if(guess < minNumber || guess > maxNumber){
            window.alert(`Your guess is outside parametres`);
        }else{
            attempts++;
            if(guess > randomNum){
                window.alert(`Too High`);
            }else if(guess < randomNum){
                window.alert(`Too Low`);
            }else{
                window.alert(`It took you ${attempts} attempts to reach the right answer: ${randomNum}`);
                isRunning = false;
            }
        }
    }