// this = referance to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

// THIS does not work with arrow functions

const person1 = {
    name: "Spongebob",
    favoriteFood: "hamburgers",
    sayHello: function() {console.log(`Hello, I am ${this.name}`)},
    eat: function() {console.log(`I eat ${this.favoriteFood}`)},
}

const person2 = {
    name: "Patrick",
    favoriteFood: "pizza",
    sayHello: function() {console.log(`Hello, I am ${this.name}`)},
    eat: function() {console.log(`I eat ${this.favoriteFood}`)},
}

person2.sayHello();
person2.eat();