"use strict";
function printPoint(point) {
    console.log(`Coordinate of the point is x: ${point.x} and y: ${point.y}`);
}
const obj1 = {
    x: "1",
    y: "1",
};
printPoint(obj1);
// Особенность в функциях: главное чтобы были обязательные параметры
const obj2 = {
    x: "1",
    y: "1",
    z: "4", // Необзяательный параметр
};
printPoint(obj2);
function printName(user) {
    console.log('Hello', user.firstName.toUpperCase());
    console.log('Hello', user.secondName); // Если параметр необязательный, то нуобходима проверка для операций с этим свойством (может быть undefine)
}
function login(user) {
    if (user.login.length > 0 && user.password.length > 0) {
        console.log('Hello', login);
    }
}
