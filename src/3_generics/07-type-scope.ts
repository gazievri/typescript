export function createTuple<T>(first: T) {
    return function<U>(second: U): [T, U] {
        return [first, second]
    }
}

const toTupleWIth1 = createTuple(1)

const val1 = toTupleWIth1(1)
const val2 = toTupleWIth1('2')