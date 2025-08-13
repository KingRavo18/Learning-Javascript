// TEMPERATURE CONVERSION PROGRAM

function conversion() {
    const conversionResult = document.getElementById("conversion-result");
    const celFahr = document.getElementById("celsius-fahrenheit");
    const fahrCel = document.getElementById("fahrenheit-celsius");
    const value = Number(document.getElementById("temp-number").value);
    let temp;
    if(celFahr.checked){
        temp = value * 9 / 5 + 32;
        conversionResult.textContent = temp.toFixed(2) + "°F";
    }else if(fahrCel.checked){
        temp = (value - 32) * 5 / 9;
        conversionResult.textContent = temp.toFixed(2) + "°C";
    }else{
        conversionResult.textContent = "Please check one of the options";
    }
}