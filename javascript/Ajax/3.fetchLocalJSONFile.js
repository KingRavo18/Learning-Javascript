document.getElementById("button1").addEventListener('click', loadUser);
document.getElementById("button2").addEventListener('click', loadUsers);

function loadUser(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../javascript/Ajax/user.json", true);

    xhr.onload = function(){
        
        if(this.status === 200){
            const user = JSON.parse(this.responseText);
            const { id, name, email } = user;
            let output = 
            `<ul>
                <li>Id: ${id}</li>
                <li>Name: ${name}</li>
                <li>Email: ${email}</li>
            </ul>`;
            document.getElementById("user").innerHTML = output;
        }
    }
    xhr.send();
}

function loadUsers(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../javascript/Ajax/users.json", true);

    xhr.onload = function(){
        if(this.status === 200){
            const users = JSON.parse(this.responseText);
            let output = " ";

            for(let i in users){
                output += 
                    `<ul>
                        <li>Id: ${users[i].id}</li>
                        <li>Name: ${users[i].name}</li>
                        <li>Email: ${users[i].email}</li>
                    </ul>`;
            }
            
            document.getElementById("users").innerHTML = output;
        }
    }
    xhr.send();
}