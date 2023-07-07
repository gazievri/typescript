export {}

type Side = "top" | "right" | "left"

// Шаблонная строка для создания типов
type Margin = `margin-${Side}`
type Margin = `margin${'' | Capitalize<Side>}`


interface ICar {
    brand: string,
    model: string,
    year: number,
}

type CarFactory = {
    [K in keyof ICar as `set${Capitalize<K>}`] : (car: ICar, value: ICar[K]) => void
}