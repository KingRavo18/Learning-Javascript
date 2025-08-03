//COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseButton");
const resetBtn = document.getElementById("resetButton");
const increaseBtn = document.getElementById("increaseButton");
const countLabel = document.getElementById("myP");
let count = 0;

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}