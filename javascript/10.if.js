// IF STATEMENTS = if a condition is true, execute some code
//                 if not, do something else

/*
let age = 13;

if(age >= 18){
    console.log("You are of legal age");
}else{
    console.log("You must be of legal age");
}
*/
/*
let time = 14;

if(time < 12){
    console.log("Good Morning");
}else{
    console.log("Good afternoon");
}
*/
/*
let isStudent = false;

if(isStudent){
    console.log("You are a student");
}else{
    console.log("You're not a student");
}
*/
/*
let age = 25;
let hasLicense = false;

if(age >= 16){
    console.log("You are old enough to have a driver's license");
    if(hasLicense){
        console.log("You have a driver's license");
    }else{
        console.log("You don't have a driver's license");
    }
}else{
    console.log("You are not old enough to have a driver's license");
}
*/

const ageBtn = document.getElementById("ageBtn");
const ageMessage = document.getElementById("ageMessage");
const ageInput = document.getElementById("ageInput");
let age;

ageBtn.onclick = function(){

    age = Number(ageInput.value);
    if(age >= 100){
        ageMessage.textContent = "You are too old";
    }else if(age == 0){
        ageMessage.textContent = "You are just born";
    }else if(age >= 18){
        ageMessage.textContent = "You are old enough to enter this site";
    }else if(age < 0){
        ageMessage.textContent = "You're age cannot be below zero";
    }else{
        ageMessage.textContent = "You must be 18+ to enter this site";
    }
}