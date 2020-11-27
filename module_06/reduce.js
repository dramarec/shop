// numbers.reduce();
// [].reduce();
// =======================================
// [].reduce(a,  b);
// numbers.reduce()
// let a = callback
// let a = function (){ }
// let a = () => { };
// (acc, element, index, arr){ } // callbackParams
// b = start of accumulator 
// - 0, '', [], {}, Boolean
// =======================================

// Sum of arr
// let numbers = ['vodka', 'pyvo', 'whiskey', 'vine', 'rum', 'sambuka'];



// [].reduce((acc, element, index, arr){ },  b);

// numbers.reduce( (total, elem, i, arr)=>{
    //     // console.log('acc', total);
    //     // console.log('elem-of-arr: ', elem)
    //     // console.log('index', i);
    //     // console.log('arr', arr)
    // }, 10)
    
    
    
    // let numbers = [1,2,3,4,5]; 
    
// let sum = numbers.reduce( (total, elem)=>{
//     return total + elem;

//     // 0 + 1 = 1
//     // 1 + 2 = 3
//     // 3 + 3 = 6
//     // 6 + 4 = 10
//     // 10 + 5 = 15
// }, 0)
// console.log(sum)




let persons = [
	{ id: 1, name: 'Vova', age: 17, budget: 4000, isComplete: true },
	{ id: 2, name: 'Mike', age: 25, budget: 3400, isComplete: false },
	{ id: 3, name: 'Sara', age: 30, budget: 400, isComplete: true },
	{ id: 4, name: 'Bob', age: 15, budget: 200, isComplete: false },
];


let budget = persons.reduce((acc, person) => {
    return acc + person.budget;
}, '');




console.log(budget)