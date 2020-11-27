// Selecting elements // 

console.log(document)

// document.getElementById();
// document.querySelector
// document.querySelectorAll --- !!! NodeList!!!!!
// document.getElementsByClassName() --- ////// HTMLCollection ///////
// document.getElementsByTagName --- ////// HTMLCollection ///////
// HTMLCollection нужно преобразовать в мвссив


// console.log(window.document)


// 1. Выбрать элемент по селектору;
// let mainHeading = document.querySelector('h1');
// mainHeading = document.querySelector('.header');
// mainHeading = document.querySelector('#main-header');
// let mainHeading = document.getElementById('main-header')
// mainHeading.style.backgroundColor = 'gray'
// mainHeading.style.color = 'blue';
// console.log(mainHeading)


// let birdImage = document.querySelector('img');
// birdImage = document.querySelector('.my-image');
// birdImage = document.querySelector('#bird');
// console.log(birdImage);


// let bread = document.querySelector('#bread')

//!!!!!!!!!!!!!!!!!!!!!!!! NodeList !!!!!!!!!!!!!!!!!!!!!!!!!
// let girl = document.querySelectorAll('.my-image');
// girl = document.querySelectorAll('.my-image')[2];

// let navigationList = document.querySelectorAll('.list')
// navigationList = document.querySelectorAll('.list')[1]

//!!!!!!!!!!!!!!!!!!!!!!!! NodeList!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log(girl);
// console.log(navigationList);


////// HTMLCollection ///////
// let images = document.getElementsByClassName('my-image');
// let girl = document.getElementsByClassName('my-image')[2];

// // let imagesArr = Array.from(images)
// let imagesArr = [...images]

// console.log(imagesArr);

////// HTMLCollection /////// 
// let images = document.getElementsByTagName('img')
// let imagesArr = [...images]

// imagesArr.forEach((image) => {
//     image.style.display = 'none';
// })
// console.log(images);