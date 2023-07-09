"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
// параметре все равно any, даже если мы уже определили его в интерфейсе
// опциональные поля не работают
class Car {
    go(speed) {
        console.log('Let us go');
    }
}
exports.Car = Car;
const car = new Car();
car.go(30);
