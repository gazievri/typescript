export function append<T>(el: T, list: T[]): T[]  {
    return list.concat(el);
}

append<number>(1, [2,3,4])
