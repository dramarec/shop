// Inheritance - наследование
// Inheritance = Functional inheritance + Prototype inheritance

// Object.create


let objPrototype = {
    status: 'Admin',
    sayHello() { return 'Sey hello' },
    getInfo() { return 'Sey hello' }
}


let newObj = Object.create(objPrototype,
    {
        name: {
            value: 'Vova'
        },
        age: {
            value: 35
        }
    }
);

console.log(newObj)