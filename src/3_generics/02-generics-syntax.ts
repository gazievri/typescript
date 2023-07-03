Array<string>

// Принято параметр тут писать в одну букву - обычно T
type TypeFactory<T> = T

type XType = TypeFactory<number>


function toArray<T>(...arg: T[]): T[] {
    return arg;
}

// Когда мы не знаем какие данные будут что бы не делать бесконечную перегрузку
toArray(1,2,3)
toArray('as', 'ad')


interface IObject<T> {
    title: string,
    value: T
}

export const obj1: IObject<number> = {
    title: 'car',
    value: 12
}

console.log(obj1)