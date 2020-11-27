/*Напиши скрипт подсчета стоимости гравировки украшений.
 Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0) 
 принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, 
 и возвращающую цену гравировки всех слов в строке.

Для решения этой задачи не используйте циклы. Т.е. 
никаких for, while, do while, for of, for in, forEach или функциональных методов.*/


const calculateEngravingPrice = (pizza = "", pricePerWord = 0) => {

    // console.log('message', message);
    // console.log('pricePerWord', pricePerWord);
    let calculateArray = pizza.split(' ');
    //let qty = calculateArray.length;

    return calculateArray.length * pricePerWord;

    // calculateArray 
    // console.log(totalPrice);
    //return(totalPrice)
}
console.log(calculateEngravingPrice('Hello Vova and Sara', 30));