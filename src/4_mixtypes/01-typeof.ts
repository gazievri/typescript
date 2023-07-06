import { average } from '../1_base/02_functions'

export let str = 'Hello!'

// определили тип переменной или чего угодня если нам надо понять что за тип
type x = typeof str

type fn = typeof average

const max: fn = (...numbers) => Math.max(...numbers)

type returnFn = ReturnType<typeof average>
