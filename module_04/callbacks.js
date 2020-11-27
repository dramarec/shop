function sum(a, b) {
    return a + b;
}

// sum(a, b);

function calc(a, b, sum) {
    return sum(a, b)
}


// let result = calc(20, 30, function (a, b) { return a + b });
// let result = calc(20, 30, (a, b) => { return a + b });
// let result = calc(11, 20, sum);
// console.log(result);




// let arr = ['vova', 'sara', 'bob', 'sam'];


// let elemToUpperCase = function (elem, index) {
//     console.log(index + ' ' + elem.toUpperCase())
// }

// arr.forEach(function (elem) {
//     console.log(elem.toUpperCase())
// });


// arr.forEach(elemToUpperCase);


let callback = function () {
    console.log('Click on btn!')
}

let btn = document.addEventListener('click', callback);
