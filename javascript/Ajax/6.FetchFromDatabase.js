function loadUsers(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../Javascript/Ajax/users.php", true);

    xhr.onload = function(){
        if(this.status === 200){
            const users = JSON.parse(this.responseText);

            let output = "";

            users.forEach(user => {
                const { id, name } = user;
                output += `<ul>
                    <li>ID: ${id}</li>
                    <li>NAME: ${name}</li>
                </ul>`;
            });

            document.getElementById("users").innerHTML = output;
        }
    }

    xhr.send();
}