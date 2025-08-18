// RANDOM PASSWORD GENERATOR

function generatePassword(lenght, includesUpperCase, includesLowerCase, includesNumbers, includesSymbols){
    
    if(!includesUpperCase && !includesLowerCase && !includesNumbers && !includesSymbols || lenght <= 0){
        return "Password contains nothing.";
    }

    let result = "";
    let letters = "";

    includesUpperCase ? letters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    includesLowerCase ? letters += "abcdefghijklmnopqrstuvwxyz" : "";
    includesNumbers ? letters += "0123456789" : "";
    includesSymbols ? letters += "!+=-@#$%^&*()" : "";

    let numberOfChars = letters.length;
    for(let i = 0; i < lenght; i++){
        result += letters.charAt(Math.floor(Math.random() * numberOfChars));
    }
    return result;
}

const passwordLenght = 20;
const passwordUpperCase = false;
const passwordLowerCase = true;
const includeNumbers = false;
const includeSymbols = true;

const password = generatePassword(passwordLenght,
                                  passwordUpperCase,    
                                  passwordLowerCase,
                                  includeNumbers,
                                  includeSymbols);

console.log(password);