
// const arr = [2, 3, 5, 6, 7, 1500, 8, 12, 25, 36];

// const maxNum = function (array) {
//   return  Math.max.apply(Math, array)
//     // return Math.max.bind(Math, ...array)(); 

// }
// const num = maxNum(arr);
// console.log(num);



const user = {
    name: 'Petro',
    age: 20,
    showData() {
        console.log(this.name, this.age);

    },
}
// user.showData();


const cars = [
    { name: 'bmw', age: 2 },
    { name: 'audi', age: 4 },
    { name: 'mini', age: 8 }
]

for (let oneCar of cars) {
    // user.showData.call(oneCar);
    user.showData.bind(oneCar)();
}