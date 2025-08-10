// while loop = repeat some code WHILE some condition is true

/*
let username = "";

while(username === "" || username === null){
    username = window.prompt(`Enter your name`);
}
    console.log(`Hello ${username}`);

//DO WHILE
let username2;
do{
    username2 = window.prompt(`Enter your name`);
}while(username2 === "" || username2 === null)
     console.log(`Hello ${username2}`);
*/

let loggedIn = false;
let username;
let password;
/*
while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username && password){
        loggedIn = true;
        console.log("You are logged in!");
    }
}
*/
do{
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username && password){
        loggedIn = true;
        console.log("You are logged in!");
    }
}while(!loggedIn)