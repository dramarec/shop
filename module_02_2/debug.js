let age = 25;
const users = ["Poly", "Roma", "Coda"]

// console.log("users", users);
// console.log("age", age);


let debug = function (cat, message = "") {
    console.log(message, cat);
}


debug("Массив пользователей", users)
debug("Возраст", age)
debug(age)