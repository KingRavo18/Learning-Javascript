// constructor = special method for defining the
//               properties and methods of objects

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.make} ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "black");
const car3 = new Car("Dodge", "Charger", 2026, "silver");


console.log(car1);
console.log(car2);
car3.drive();