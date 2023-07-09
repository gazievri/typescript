// abstarct запрещает создавать экземпляры класса
// абстрактными могут быть не только классы но и свойства

abstract class Vehicle {
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

export class Car extends Vehicle {}

// ошибка при создании экземпляра класса
const v1 = new Vehicle()