// nested objects = objects inside of other objects.
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by a Parent Object

//                  Person{Adress{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    adress: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Waters"
    }
}


for(const property in person.adress){
    console.log(person.adress[property]);
}

//ANOTHER EXAMPLE

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch Street", "Bikini Bottom", "Int. Waters");

console.log(person1.address.city);