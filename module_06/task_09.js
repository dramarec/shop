/**
 * Задание 9
Массив имен (поле name) людей, 
отсортированных в зависимости 
от количества их друзей (поле friends)*/

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
      friends: ['Briana Decker', 'Sharron Pace'],
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
  
  // const getNamesSortedByFriendsCount = users => {
  //   return users.sort((user_1, user_2) => 
  //   user_1.friends.length - user_2.friends.length)
  //   .map(user => user.name )
  // }
  
  
  const getNamesSortedByFriendsCount = users => {
    return [...users]
    .sort(({friends: friends_1},{friends: friends_2}) => 
    {return friends_1.length-friends_2.length})
    .map(({name}) => name)
  }
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 
  //'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 
  //'Ross Vazquez' ]
  
  
  //const numbers = [1,1000,11,2,24,0,3,30];
  //numbers.sort((a,b) => {return a-b})
  //numbers.sort((a,b) => {return b-a})
  //console.log(numbers);