// // Write code under this line

// alert("Alert message");
// prompt('Ender name: ');
// confirm('Are you shure');

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = '';
let userInput = prompt('Enter you password');

if (userInput === null) {
    message = 'Отменено пользователем!'
} else if (userInput === '') {
    message = 'Пустая строка';
} else if (ADMIN_PASSWORD === userInput) {
    message = 'Добро пожаловать!'
} else {
    message = ('Доступ запрещен, неверный пароль!');
}

switch (userInput) {
    case 'null':
        message = 'Отменено пользователем!';

        break;

    case '':
        message = 'Пустая строка';

        break;

    case 'jqueryismyjam':
        message = 'Добро пожаловать!';

        break;

    default:
        message = 'Доступ запрещен, неверный пароль!';

        break;
}
alert(message);


alert(message);

// null,
// 'Hello Vova';


// = equal
// == сравнение с приведением типов
// (userInput == false) 


// === сравнение без приведения типов
// null => null,
// false => Bollean
// (userInput === false)   