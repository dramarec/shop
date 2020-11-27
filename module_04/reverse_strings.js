// есть строка 'abcdefj'
// jfedcba

// const reverseString = function (str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('abcdefj'));

// function reverseString(str) {
//     let newStr = '', i;
//     for (i = str.length - 1; i >= 0; i--) {
//         // newStr += str.charAt(i);
//         newStr += str[i];
//     }
//     return newStr;
// }
// console.log(reverseString('abcdefj'));

// console.log(10,9,8,7,6,5,4,3,2,1,0);

// for (let i = 10; i >= 0; i-=1) {
//     console.log(i);
// }
// function reverseString(str) {
//     let newStr = '';
//     for (let letter of str) {
//         // newStr += letter;
//         newStr = letter + newStr;
//     }
//     return newStr;
// }
// console.log(reverseString('abcdefj'));

// const reverseString = function (str) {
//     let newStr = '';
//     for (let i in str) {
//         newStr = str[i] + newStr;
//         // console.log(i);
//     }
//     return newStr;
// }
// console.log(reverseString('abcdefj'));