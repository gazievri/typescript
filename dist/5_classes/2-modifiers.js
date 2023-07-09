"use strict";
// Модификаторы доступа public и private закрывают или октрывают доступы
// Protected разрешает своейство или метод наследовать но нельзя использовать в инстансе
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    drive(speed) {
        console.log('Let us go with speed', speed.toFixed());
    }
    stop() {
        console.log('Stopped');
    }
    log(speed) {
        console.log('Vehicle has changed speed to', speed);
    }
    alternativeLog() {
        console.log('Alternatie');
    }
}
exports.Vehicle = Vehicle;
class Car extends Vehicle {
    changeSpeed() {
        this.drive(55);
        this.alternativeLog();
    }
}
const car1 = new Car();
car1.drive(50);
car1.stop();
car1.log(60);
car1.altr;
