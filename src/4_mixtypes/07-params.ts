export {}

function f1(arg: {a: number, b: string}) {
    return arg.a + arg.b
}

// Определить возвращаемый тип из функции
type T0 = ReturnType<typeof f1>

// Определить тип параметров
type T1 = Parameters<typeof f1>