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


// TS позволяет упростить тело конструктора если в нем сразу прописать свойство public для аргументов
class Car extends Vehicle {
    constructor(public readonly color: string, public maxSpeed: number) {
        super()
    }
}

const car1 = new Car('red', 200)




