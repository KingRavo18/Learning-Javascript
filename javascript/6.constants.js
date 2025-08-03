// const = a variable that can't be changed

const PI = 3.14;

document.getElementById("calc").onclick = function(){
    const radius = Number(document.getElementById("radius").value);
    document.getElementById("result").textContent = 2 * PI * radius + "cm";
}