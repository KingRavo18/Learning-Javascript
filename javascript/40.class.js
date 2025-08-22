// class = (ES6 feature) provides a more structured and cleaner way to 
//         work with objects compared to traditional constructor functions 
//         ex. static keyword, encapsulation, inheritence

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name} for $${this.price.toFixed(2)}`)
    }

    totalSum(tax){
        return (this.price + (this.price * tax)).toFixed(2);
    }
}
        
const salesTax = 0.05;

const product1 = new Product("shirt", 19.99);
const product2 = new Product("car", 1294.99);
const product3 = new Product("banana", 14449.99);

product3.displayProduct();

const total = product2.totalSum(salesTax);
console.log(total);