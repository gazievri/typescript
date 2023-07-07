export {}

// Исключает тип с из юниона
type T0 = Exclude<'a' | 'b' | 'c', 'c'>

type Status = 'good' | 'bad' | 401 | 200

// Исключили все числовые типы из юниона Status
type StringStatus = Exclude<Status, number>




// Извлекает тип с из юниона
type T00 = Extract<'a' | 'b' | 'c', 'c'>

type Status2 = 'good' | 'bad' | 401 | 200

// Извлекли все числовые типы из юниона Status2
type NumericStatus2 = Extract<Status, number>



// Отбрасывает все пустые значения в типах
type NewStatus = NonNullable<string | undefined | null>



// Record

type MyRecord = Record<string, number>

const firstRecord: MyRecord = {
    name: 444,
    title: 333
}

type WellKnowBrands = 'apple' | 'lenovo' | 'google'
type NewRecord = Record<WellKnowBrands, string>

const newBrands: NewRecord = {
    apple: 'aaaa'
}



// Pick выбирает конкретные ключи из интерфейса

interface ITodo {
    text: string,
    completed: boolean,
    createdAt: Date,
    user: string,
    id: number
}

type SimpleTodo = Pick<ITodo, 'id' | 'text' | 'user'>

// Omit выбрасывает то что не нужно из интерфейса
type SimpleTodo2 = Omit<ITodo, 'id' | 'text' | 'user'>




// Readonly

// interface ITodoNew {
//     text: string,
//     completed: boolean,
//     createdAt: Date,
//     user: string,
//     readonly id: string,
// }

interface ITodoNew {
    text: string,
    completed: boolean,
    createdAt?: Date,
    user: string,
    readonly id: string,
}

// Все поля сделал readn only
type ReadonlyTodo = Readonly<ITodoNew>

// Все поля стали необязательными
type PartialTodo = Partial<ITodo>

// Все поля обязательные
type RequiredTodo = Required<ITodo>