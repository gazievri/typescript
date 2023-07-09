// Модификаторы доступа public и private закрывают или октрывают доступы
// Protected разрешает своейство или метод наследовать но нельзя использовать в инстансе

export class Vehicle {
    public drive(speed: number): void {
        console.log('Let us go with speed', speed.toFixed())
    }

    public stop() {
        console.log('Stopped')
    }

    private log(speed: number) {
        console.log('Vehicle has changed speed to', speed)
    }

    protected alternativeLog() {
        console.log('Alternatie')
    }
}

class Car extends Vehicle {
    public changeSpeed() {
        this.drive(55)
        this.alternativeLog()
    }
}

const car1 = new Car()

car1.drive(50)
car1.stop()
car1.log(60)
car1.altr
