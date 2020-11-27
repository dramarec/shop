
// true / false

// if (Boolean) {

// }


// if (true) {
//     console.log('Hello Andrey');
// }



// if (false) {
//     console.log('Hello Vova');
// } else {
//     console.log('Pizza')
// }


// if (2 + 2 == 4) {
//     console.log('2 + 2 = 4');
// } else {
//     console.log('Pizza')
// }


// 
// 'gamburger' - true
// 'hello world' - true
// 'Vova' - true
// '' - false
// 541 - true
// 1 - true
// 0 - false
// null - false
// undefined - false
// NaN - false



// 5 + 5 = 10
// '5' + '5' = '55'

// !

// if (!true) {
//     let user = 'Vova';

//     if (!user) {
//         console.log(user)
//     } else {
//         console.log('Pizza')
//     }
// } else {
//     console.log('Sara')
// }



// Ternary operator
// ?
// (boolean) ? true : false;

// let red = 'red'
// let green = 'green';

// let colorStop = (red) ? 'Stop' : '';
// let colorGo = (green) ? 'Go' : '';

// console.log(colorGo)

// let hospital = 10000
// let lockDown = (9000 > hospital) ? true : false;

// console.log(lockDown)


// (boolean) ? true : false;
let hospital = 10000
let lockDown = 15000 > hospital && true && 2 + 2 == 4 ? 'Yes' : 'No';
console.log(lockDown)


switch ('china') {
    case value:
        console.log('Китай')
        break;

    default:
        break;
}