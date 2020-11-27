let users = ['Vova', 'Sara', 'Mike', 'Mike', 'Bob', 'Lena'];


function arrayFind(myArray, name) {
    let length = myArray.length
    for (let i = 0; i < length; i += 1) {
        // console.log(myArray[i]);
        if (myArray[i] === name) {
            console.log('Нашли')
            return true;
        }

    }
    console.log('Not Found')
    return false;
}
arrayFind(users, 'Sveta')



// let arrayLength = users.length;
// for (let i=0; i<arrayLength; i+=1 ) 
// {
//   console.log(users[i]);
// }