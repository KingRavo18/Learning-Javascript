function loadUsers(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users", true);

    xhr.onload = function(){
        if(this.status === 200){
            const users = JSON.parse(this.responseText);
            let output = "";
            users.forEach(element => {
                const {id, login, avatar_url} = element;
                output += 
                `<div class="user">
                    <img src="${avatar_url}" alt="${login}'s avatar" width="100px">
                    <ul>
                        <li>ID: ${id}</li>
                        <li>Username: ${login}</li>
                    </ul>
                </div>`
            });

            document.getElementById("users").innerHTML = output;
        }
    }

    xhr.send();
}