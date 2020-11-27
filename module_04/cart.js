const storagePrice = {
    apple: 5,
    orange: 10,
    melon: 15,
    banana: 5,
};
const userOrder1 = {
    orange: 7,
    melon: 5,
    banana: 10,
}
const userOrder2 = {
    apple: 3,
    orange: 15,
    melon: 10,
}
// 3*5 + 15*10 + 10*15
//7*10 + 5*15 + 5*10
const calculateOrderPrice = function (userOrder, storage) {
    let sum = 0;

    for (let order in userOrder) {
        // console.log(userOrder[order]); получили количество
        // console.log(storage[order]); получили summy
        sum += userOrder[order] * storage[order];
    }
    //for (let fruit in storagePrice) {}


    return sum;

}

const result = calculateOrderPrice(userOrder2, storagePrice)
console.log(result);