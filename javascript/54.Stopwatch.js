// STOPWATCH

const display = document.getElementById("display");
let time = null;
let startTime = 0;
let timePassed = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - timePassed;
        time = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(time);
        timePassed = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(time);
    startTime = 0;
    timePassed = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    timePassed = Date.now() - startTime;
    let hours = Math.floor(timePassed / (1000 * 60 * 60));
    let minutes = Math.floor(timePassed / (1000 * 60) % 60);
    let seconds = Math.floor(timePassed / 1000 % 60);
    let milliseconds = Math.floor(timePassed % 1000 / 10);

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    milliseconds = milliseconds.toString().padStart(2, "0");
    
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}


/*
start()
1000 = 1000 - 0
0 = 1000 - 1000 

10 passes

stop()
10 = 1010 - 1000

10 passes

start()
1010 = 1020 - 10
10 = 1020 - 1010 
*/