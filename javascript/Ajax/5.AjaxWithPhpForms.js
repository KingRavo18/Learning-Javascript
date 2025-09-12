document.getElementById("button").addEventListener("click", getName);
document.getElementById("form").addEventListener("submit", getName);
document.getElementById("postForm").addEventListener("submit", postName);

function getName(event){
    event.preventDefault();
    const name = document.getElementById("nameInput1").value;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `../Javascript/Ajax/process.php?name=${name}`, true);

    xhr.onload = function(){
        console.log(this.responseText);
    }

    xhr.send();
}

function postName(event){
    event.preventDefault();

    const name = document.getElementById("nameInput2").value;
    const params = `name=${name}`;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", `../Javascript/Ajax/process.php`, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function(){
        console.log(this.responseText);
    }

    xhr.send(params);
}