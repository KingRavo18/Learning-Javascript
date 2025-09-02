// WEATHER APP

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "89f8ff6c807e605fb7805d89781b3812";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            displayError(error.message);
        }
    }else{
        displayError("Please enter a city");
    }

});

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return response.json();
}

function displayWeatherInfo(data){

    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

   cityDisplay.textContent = city;
   cityDisplay.classList.add("cityDisplay");

   tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
   tempDisplay.classList.add("tempDisplay");

   humidityDisplay.textContent = `Humidity: ${humidity}%`;
   humidityDisplay.classList.add("humidityDisplay");

   weatherEmoji.textContent = getWeatherEmoji(id);
   weatherEmoji.classList.add("weatherEmoji");

   descDisplay.textContent = description;
   descDisplay.classList.add("descDisplay");


   card.appendChild(cityDisplay);
   card.appendChild(tempDisplay);
   card.appendChild(humidityDisplay);
   card.appendChild(weatherEmoji);
   card.appendChild(descDisplay);
   
}

function getWeatherEmoji(weatherId){

    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 500):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 600):
            return "🌫️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❓";
    }

}

function displayError(message){

    card.textContent = "";
    card.style.display = "flex";

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.appendChild(errorDisplay);
}