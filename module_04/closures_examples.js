
// 1.
// function createCalckFuncktin(number) {
//     return number * 1000;
// }


// function createCalckFuncktin(num) {
//     return function () {
//         return (1000 * num);
//     }
// }

// // let calc = createCalckFuncktin(21)();
// // calc = createCalckFuncktin(42);
// console.log(createCalckFuncktin(42))



// 2.
// i++;
// i += 1;


// function incrementor(n) {
//     return function (num) {
//         return num + n;
//     }
// }


// let addOne = incrementor(1);
// let addTen = incrementor(10);

// console.log(addOne(1));
// console.log(addTen(10));


// https://google.com/
// https://facebook.com/

// https://unian.net/
// https://dark.net/

// https://nv.ua/
// https://tsn.ua/



// 3.
// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`;
//     }
// }

// let comUrl = urlGenerator('com');
// let netUrl = urlGenerator('net');
// let uaUrl = urlGenerator('ua');

// console.log(comUrl('google'));
// console.log(comUrl('facebook'));

// console.log(uaUrl('nv'));




function createFrameworkManager() {
    let frameworks = ['Angular', 'Vue'];

    return {
        print() {
            console.log(frameworks);
        },
        add(pizza) {
            frameworks.push(pizza);
        }
    }
}

let manager = createFrameworkManager();
manager.print();
manager.add('React');
// manager.print()
manager.add('BlackBone');
manager.print()

// console.log(manager)
