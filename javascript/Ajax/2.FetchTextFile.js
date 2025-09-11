// Create event listener

document.getElementById("button").addEventListener("click", loadText);

function loadText(){
    // Create XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN - type of request, url/file name, async? (true/false)
    xhr.open('GET', '../javascript/Ajax/sample.txt', true);

    console.log("Readystate: ", xhr.readyState);

    // Optional - used for loaders
    xhr.onprogress = function(){
        console.log("Readystate: ", xhr.readyState);
    }

    xhr.onload = function(){
        console.log("Readystate: ", xhr.readyState);
        if(this.status === 404){
            return document.getElementById("myText").textContent = "Not found";
        }
        document.getElementById("myText").textContent = this.responseText;
    }

    xhr.onerror = function(){
        console.error("Request Error");
    }

    // Old way of doing things

    //xhr.onreadystatechange = function(){
        //console.log("Readystate: ", xhr.readyState);
        //if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
        //}  
    //}

    // Sends request
    xhr.send();
}


// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready