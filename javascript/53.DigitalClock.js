// DIGITAL CLOCK

function digitalClock() {
    const date = new Date()
    let hours = date.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const padZero = (time) => time < 10 ? "0" + time : time;
    const time = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    document.getElementById("digitalClock").textContent = time;
}

digitalClock();
setInterval(digitalClock, 1000);
