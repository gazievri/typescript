function sum(a: number, b: number): number {
    return a + b;
}

const sum2 = (a: number, b: number): number => {
    return a + b;
}

// Функция ничего не возвращает
function log(name: string): void {
    console.log(name);
}

// Ретерна не будет никогда: функция никогда не вернет ничего
function crash(): never {
    throw new Error('crash')
}

// Необязательный параметр определяется через ?
function logAnother(name: string, userId?: string): void {
    console.log('Hello', name, 'with id', userId || 'anonym');
}

// Работа со спред оператором
function average(...nums: number[]) {
    const sum = nums.reduce((current, total) => current + total, 0);

    return sum / nums.length
}


// Практика: выполнить типизацию функции
function slice(str: string, start: number, end?: number): string {
    let newStr = '';
   
    let lastIndex: number;
   
    if (end) {
      lastIndex = end > str.length ? str.length : end;
    } else {
      lastIndex = str.length;
    }
   
    for (let i = start; i < lastIndex; i++) {
      newStr += str[i];
    }
   
    return newStr;
  }