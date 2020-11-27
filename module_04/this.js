// This это тот кто вызывает функцию.
// Не важно где обьявлена ф-ция, важно кто ее вызывает.


// function logThis() {
//     console.log(this);
// }

// logThis();
// window.logThis();
// this.logThis();


let user = {
    name: 'vova!',
    age: 20,

    logThis() {
        console.log('this from user', this)
        logThis();
    },

    showName() {
        // console.log('showName', this.name);

        this.alert()
    },

    alert() {
        console.log(this.name);
    }
}

// user.showName();


// let admin = {
//     name: 'sara',
//     age: '30',
//     logThis() {
//         console.log(this);
//     }
// }
// user.logThis()
// user.showName()
// admin.logThis()
// ====================================

// user.alert();
// alert('Alert alert');
// window.alert('Window alert');
// this.alert(' This alert')

// prompt()
// confirm()


// ====================================

// let name = 'Bob!';

// console.log(window.name);


// =============
// Функции конструкторы
// ES5
// function User(name, status, age) {
//     this.name = name;
//     this.status = status;

//     this.sayHello = function () {
//         console.log('Hello' + ' ' + this.name);
//     }
// }

// // Instance
// let vova = new User('vova', 'admin');
// let sara = new User('sara', 'guest');
// let bob = new User('bob', 'moderator');


// console.log(typeof vova);
// console.log(vova instanceof User);

// vova.sayHello();
// sara.sayHello()
// bob.sayHello()


// Dom елементы
// ==========


let btn = document.querySelector('button');
// btn.addEventListener('click', (event) => {
//     // console.log(event.target)
//     console.log(this)
// })

btn.addEventListener('click', function () {
    console.log(this)
})

// console.log(btn)