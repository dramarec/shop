const users = [
    {
      id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      skills: ['ipsum', 'lorem'],
      gender: 'male',
      age: 37,
    },
    {
      id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Marilyn Mcintosh', 'Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
      gender: 'female',
      age: 34,
    },
    {
      id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
      gender: 'male',
      age: 24,
    }
  ];
// Задание 8
// Массив имен всех пользователей у которых есть
// друг с указанным именем.



// const getUsersWithFriend = (users, friendName) => {
 
// return users.filter(({friends}) => friends.includes(friendName))
// .map(({name}) => name)
// };

// //console.log(getUsersWithFriend(users, 'Marilyn Mcintosh')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Sharron Pace')); // [ 'Elma Head', 'Sheree Anthony' ]

const getUsersWithFriend = (users, friendName) => {
 
    let namesArr = users.reduce((acc, user) => {
    user.friends.includes(friendName) ? acc.push(user.name) : null;
    return acc
     } ,[])
return namesArr
}
    
    //console.log(getUsersWithFriend(users, 'Marilyn Mcintosh')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
    console.log(getUsersWithFriend(users, 'Sharron Pace')); // [ 'Elma Head', 'Sheree Anthony' ]
    