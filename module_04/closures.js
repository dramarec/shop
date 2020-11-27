// Замыкание - это функция со всеми внешними перменными которые ей доступны.


let feavoriteNumber = 100;
let age = 30
let pizza = 'pizza'



function getNumber(num) {
    // num = 'vova';
    // console.log(num);

    let age = 40;
    console.log(num)

    let pizza = 'Dominos'
    console.log(pizza);
}



function getNumber2(num) {
    // num = 'vova';
    // console.log(num);

    let age = 40;
    console.log(num)

    let pizza = 'Dominos'
    console.log(pizza);
}



// getNumber(20);
getNumber(feavoriteNumber)
