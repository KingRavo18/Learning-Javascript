// cookie = a small text file stored on your computer
//          used to remember information about the user
//          saved in name=value pairs

//console.log(navigator.cookieEnabled);

//document.cookie = "firstName=Patrick; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
//document.cookie = "lastName=Star; expires=Sun, 1 January 2000 12:00:00 UTC; path=/";

//console.log(document.cookie);

const firstText = document.getElementById("firstText");
const secondText = document.getElementById("secondText");
const submitBtn = document.getElementById("submitBtn");
const cookiesBtn = document.getElementById("cookiesBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", secondText.value, 365);
}); 

cookiesBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    secondText.value = getCookie("lastName");
})

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expries=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name){
    setCookie(name, "", "");
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1);
        }
    });

    return result;
}
