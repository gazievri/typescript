type WindowProp = keyof Window

const myValue: WindowProp = 'closed'

interface ICar {
    brand: string,
    year: number
}

type Car1 = keyof ICar