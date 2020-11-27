const users = [
    { name: 'bob', age: 20 },
    { name: 'lena', age: 25 },
    { name: 'mike', age: 30 },

]
// const users2 = [...users]
// console.log(users2===users);

const setStatus = function (usersArray, userName) {
    const updateUsers = [...usersArray];
    for (let user of updateUsers) {
        // console.log(user);
        user.status = 'guest'
        if (user.name === userName) {
            user.status = 'admin'
        }
    }
    return updateUsers;
}
console.log(users);
console.log(setStatus(users, 'mike'));





weta2434fdSughiiu13123jvne434
vzkkh21314hjherrerklkg; bl; l