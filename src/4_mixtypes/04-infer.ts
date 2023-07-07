function fromPair(pair: [string, string]) {
    const [key, value] = pair

    return {[key]: value}
}

type FirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never

const myPair: FirstArg<typeof fromPair> = ['myKey', 'myValue']

// Ошибка
fromPair(myPair)




export{}