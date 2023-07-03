export function length<T extends { length: number }>(arg: T): number {
    return arg.length;
}

length('mama') // ok
length(['mama']) // ok
length({ length: 1 }) // ok
length(123) // функция работать не будет, так длинны у чисел нет, надо ограничить типы
length(true) // тоже самое - работать не будет


