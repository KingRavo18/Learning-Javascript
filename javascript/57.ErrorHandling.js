// Error = An Object that is created to represent a problem that occurs
//         Occur often with user input or steablishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//               ex. close files, close conncections, release resources


try {
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS

    console.log("Hello");
}
catch(error){
    console.error(error);
}
finally{
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes");
}

console.log("You have reached the end of the program");

try{
    const dividend = Number(window.prompt("Enter a divident: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor === 0){
        throw new Error("You can't divide by 0");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("That is not a number");
    }

    const result = dividend / divisor;

    console.log(result);
}
catch(error){
    console.error(error);
}