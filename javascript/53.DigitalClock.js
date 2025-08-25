function digitalClock(){
    const time = new Date();
    let hours = time.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const padZero = (time) => time < 10 ? "0" + time : time;

    document.getElementById("digitalClock").textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
}

digitalClock();
setInterval(digitalClock, 1000);