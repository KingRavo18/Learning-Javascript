// RANDOM PASSWORD GENERATOR

function randomPassword() {
    const HasLowerCaseChars = document.getElementById("LowerCaseChars"),
          HasUpperCaseChars = document.getElementById("UpperCaseChars"),
          HasNumbers = document.getElementById("Numbers"),
          HasSymbols = document.getElementById("Symbols"),
          LengthInput = document.getElementById("LengthInput"),
          PasswordLength = Number(LengthInput.value),
          Result = document.getElementById("Result");
          
    if(!HasLowerCaseChars.checked && !HasUpperCaseChars.checked && !HasNumbers.checked && !HasSymbols.checked){
        Result.textContent = "Please check a password parameter";
        return;
    }

    if(PasswordLength === 0 || PasswordLength < 0){
        Result.textContent = "Please enter a positive number";
        LengthInput.value = "";
        LengthInput.focus();
        return;
    }

    let chars = "",
        availableChars,
        password = [],
        random;

        if(HasLowerCaseChars.checked){
            chars += "abcdefghijklmnopqrstuvwxyz";
        }
        if(HasUpperCaseChars.checked){
            chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if(HasNumbers.checked){
            chars += "0123456789";
        }
        if(HasSymbols.checked){
            chars += "!@#$%^&*()_-+=";
        }

        availableChars = chars.split("");

    for(let i = 0; i < PasswordLength; i++){
        random = Math.floor(Math.random() * availableChars.length + 1);
        password.push(availableChars[random]);
    }

    Result.textContent = password.join("");
}