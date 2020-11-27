// const flag2 = new Boolean(1);



// let name = 'vova';
// const name = 'vova';
// var name = 'vova';

// let name = new String('vova');
// let name2 = 'Sara';

// console.log(name);
// console.log(name2);


// let num = 451;
// let num2 = new Number('451');
// console.log(num)
// console.log(num2)


// let arr = [1, 2, 3, 4, 5];
// let arr2 = new Array('1,2,3,4,5')

// console.log(arr);
// console.log(arr2);


// ES5 - класс, функция конструктор
function User(name, status) {
    this.name = name;
    this.status = status;

    this.sayHello = function () {
        console.log('Hello' + ' ' + this.name);
    }
}
let sara = new User('sara', 'admin');

// ES6 2015
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('Hello' + ' ' + this.name);
    }
}
let sara = new User('sara', 'moderator');


