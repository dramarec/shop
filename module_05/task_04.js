// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value

// Метод append(str) - получает парметр str(строку) и добавляет ее в конец _value

// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value

// Метод pad(str) - получает парметр str(строку) и добавляет ее в начало и в конец _value


class StringBuilder {
    constructor(string) {
        this._value = string;

    }
    get value() {
        return this._value;
    }
    append(str) {
        // return this._value += str;
        this._value += str;
        return this;
    }
    prepend(str) {
        this._value = str + this._value;
        return this;

    }
    pad(str) {
        this._value = str + this._value + str;
        return this;
    }


    showThis() {
        console.log(this);
    }
}

const builder = new StringBuilder('.');


// builder.append('^');

// console.log(builder.value); // '.^'

// builder.prepend('^');

// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// console.log(bui);
// builder.append('^');
// builder.prepend('^');

builder.append('^').prepend('^').pad('=');
// builder.object.object.pad('=');


// builder.append('').prepend();
// builder.showThis();


// function append() { }

// console.log(builder.value);








// let min = new Math(10, 4);
console.log(Math.min(4, -5))




console.log(Date.now())

let date = new Date()

date.now();