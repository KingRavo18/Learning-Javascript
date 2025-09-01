// JSON = (Javascript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
    "name":"Spongebob",
    "age":30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
};
const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}];
const jsonString = JSON.stringify(people);

console.log(jsonString);

const jsonnames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonperson = `{
    "name":"Spongebob",
    "age":30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}`;
const jsonpeople = `[{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}]`;

const object = JSON.parse(jsonnames);
fetch("../json/people.json").then(response => response.json())
                            .then(values => values.forEach(value => {
                                console.log(value.name);
                            }))
                            .catch(error => console.error(error));