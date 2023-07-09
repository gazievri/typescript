interface ICar {
    go(speed: number): void
    maxSpeed?: number
}

// параметре все равно any, даже если мы уже определили его в интерфейсе
// опциональные поля не работают
export class Car implements ICar {
    go(speed) {
        console.log('Let us go')
    }
}

const car = new Car()

car.go(30)
