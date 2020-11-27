// 1. Создать
// 2. Повесить атрибуты
// 3. Повесить текст
// 4. Привязать в DOM


let imgLink =  'https://cdn.pixabay.com/photo/2019/05/21/07/11/cat-4218424_960_720.jpg'


let catImg = document.createElement('img');
console.log(catImg)

catImg.setAttribute('src', imgLink);
catImg.setAttribute('alt', 'cat');
catImg.setAttribute('width', '300');

// catImg.alt = 'cat';
// catImg.scr = 'csvfvXCVBVxb'

let list = document.querySelectorAll('.list')[0];
// console.log(list)

list.append(catImg);
// list.prepend(catImg);
// list.before(catImg)
// list.after(catImg)


// let user = {
//     name: 'Vova',
//     age: 30,
//     setName(name){
//         this.name = name;
//     }
// }

// user.name = 'Sara'
// user.setName('Bobo');