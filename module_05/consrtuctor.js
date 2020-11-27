// String
// Number

// // / NaN / Infinity / -Infinity

// Boolean
// bigInt
// Object // Array // Function
// null
// undefined
// Symbol



// ES 5 !!!!!!!
// Constructor === Class

// let user = {
//     name: 'Vova',
//     age: 20
// }

// console.log(user)

function Product(brand, price) {
    // 1. { }
    // 2. привязывает this
    // 3.return готовый объект { }
    this.brand = brand;
    this.price = price;

    this.getInfo = function () {
        // console.log(this)
        // return (this.brand, this.price)
        console.log(`${this.brand}: ${this.price}`)
    }
}

// To instantiate
// Instance
let apple = new Product('Apple', 1000);
let samsung = new Product('Samsung', 300);

apple.getInfo();
samsung.getInfo();


// function User() {

// }


// function Car() {

// }


// function Shop() {

// }



