// RANDOM NUMBER GENERATOR
/*
const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum);
*/

const rollBtn = document.getElementById("myButton");
const rollLabel1 = document.getElementById("myLabel1");
const rollLabel2 = document.getElementById("myLabel2");
const rollLabel3 = document.getElementById("myLabel3");

const min = 1;
const max = 6;

rollBtn.onclick = function(){
    let rollResult1 = Math.floor(Math.random() * max) + min;
    let rollResult2 = Math.floor(Math.random() * max) + min;
    let rollResult3 = Math.floor(Math.random() * max) + min;
    rollLabel1.textContent = rollResult1;
    rollLabel2.textContent = rollResult2;
    rollLabel3.textContent = rollResult3;
}
