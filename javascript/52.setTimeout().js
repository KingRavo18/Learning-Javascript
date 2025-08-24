// setTimeout() = function in Javascript that allows you to schedule
//                the execution of a function after an amount of time (milliseconds)
//                Times are approzimate (varies based on workload of the Javascript runtime env.)

//                setTimeout(callback, delay);
//                clearTimeout(timeoutId = can cancel a timeout before it triggers)

let timeoutId;

const hello = () => timeoutId = setTimeout(() => window.alert("hello"), 3000);
const stop = () => clearTimeout(timeoutId);
