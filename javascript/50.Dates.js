// Date objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted

// Date(year, month, day, hour, minute, second, ms)
//const date = new Date("2024-01-02T12:00:00Z");
//const date = new Date(1700000000000);

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(dayOfWeek);

date.setFullYear(2303)
date.setMonth(11)

console.log(date);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("Happy New Year!!!");
}   