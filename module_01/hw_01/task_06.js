// let name = 'Vova';
// name += ' Sara';
// name += ' pizza';

// // name = name + 'Sara';
// // name = name + 'Beer'

// console.log(name)




let total = 0;

while (2 + 2 == 4) {
    let input = prompt('Введите чило');

    if (input === null) {
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }
    input = Number(input);
    total += input
}




console.log(`Общая сумма чисел равна ${total}`);