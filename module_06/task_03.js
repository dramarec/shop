const users = [
    {
      id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      skills: ['football','box'],
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
      skills: ['bear', 'drugs', 'vodka', 'lsd', 'wiskey'],
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
      skills: ['music', 'drugs', 'vodka', 'windsurf', 'bushcraft'],
      gender: 'male',
      age: 24,
    }
];
// Задание 3
// Получить массив имен пользователей 
//по полу (поле gender).
// const getUsersWithGender = (users, search) => {
//  return users.filter(({gender}) => gender === search)
//  .map(({name}) => name)
// }



const getUsersWithGender = (users, search) => 
users.filter(({gender}) => gender === search).map(({name}) => name)
   

console.log(getUsersWithGender(users, 'male')); 
//[ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]







// Задание 3
// Получить массив имен пользователей 
//по полу (поле gender).


// const getUsersWithGender = (users, search) => {
//  return users.filter(({gender}) => gender === search)
//  .map(({name}) => name)
// }


// console.log(getUsersWithGender(users, 'male')); 
//[ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


const getUsersWithGender = (users, search) => {

  let usersGenderName = users.reduce((acc, user) => {
      if(user.gender === search){
          acc.push(user);
      }
  
  return acc
  }, []);
  return usersGenderName;
  }
  
  console.log(getUsersWithGender(users, 'female')); 