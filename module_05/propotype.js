function Product(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;

    // this.getInfo = function () {
    //     console.log(`${this.brand}: ${this.price}`)
    // }

    Product.prototype.getInfo = function () {
        console.log(`${this.brand}: ${this.price}`)
    }

    Product.prototype.getPriceWithDiscount = function () {
        return ((this.price * (100 - this.discount)) / 100);
    }

    Product.prototype.setPrice = function (newPrice) {
        return this.price = newPrice;
    }

}



let apple = new Product('Apple', 1000, 15);
let samsung = new Product('samsung', 500, 20);
let lg = new Product('lg', 400, 5);
let sony = new Product('sony', 800, 30);

// console.log(sony.toString());


// console.log(apple.setPrice(1150));
// apple.getInfo()

// console.log(apple);
// console.log(samsung);
// console.log(lg);
// console.log(sony instanceof Product);
// console.log(sony instanceof Object);

console.log(new Object)


// let objArr = [
//     {
//         name: 'Vova',
//         age: 20
//     },
//     {
//         name: 'Sara',
//         age: 30
//     },
// ]

// objArr.push({
//     name: 'Bob',
//     age: 40
// })


// console.log(objArr)



// let arrNumbers = [1, 2, 3, 4, 5];
// arrNumbers.push(100)
// console.log(arrNumbers)


// let arrFruits = ['apple', 'pear', 'melon'];
// arrFruits.push('bananes');
// console.log(arrFruits.__proto__)

// e2r23
// dFEFqwf
    // __proto__
//         rg3r2rvcxvcvxcvx
//   __proto__
    //     bfcbvcbvcb
 // __proto__
//         cxVcxvcxv
//          __proto__
//             cxVcvcv
//                 __proto__
