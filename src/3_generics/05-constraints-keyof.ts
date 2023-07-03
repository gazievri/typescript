export function prop<T, U extends keyof T>(key: U, obj: T) {
    return obj[key];
}

const obj1 = {a: 1, b: 2, c: 3}

prop('a', obj1)
// prop('f', obj1) // Выдаст ошибку так как U нет в T



