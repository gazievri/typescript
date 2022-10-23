function printPoint(point: {x: string, y: string}): void {
    console.log(`Coordinate of the point is x: ${point.x} and y: ${point.y}`)
}

const obj1 = {
    x: "1",
    y: "1",
}

printPoint(obj1);

// Особенность в функциях: главное чтобы были обязательные параметры
const obj2 = {
    x: "1",
    y: "1",
    z: "4", // Необзяательный параметр
}

printPoint(obj2);


function printName( user: {
    firstName: string;
    secondName?: string;
}): void {
    console.log('Hello', user.firstName.toUpperCase())
    console.log('Hello', user.secondName) // Если параметр необязательный, то нуобходима проверка для операций с этим свойством (может быть undefine)
}


// Практика

interface User {
    login: string;
    email: string;
    password: string;
    isOnline: boolean;
    lastVisited: Date;
}

interface Admin {
    login: string;
    email: string;
    password: string;
    isOnline: boolean;
    lastVisited: Date;
    role: string;
}

function login(user: {
    login: string; 
    password: string;
}): void {

    if (user.login.length > 0 && user.password.length > 0) {
        console.log('Hello', login)
    }
}