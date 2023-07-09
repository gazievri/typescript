"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.average = void 0;
function sum(a, b) {
    return a + b;
}
const sum2 = (a, b) => {
    return a + b;
};
// Функция ничего не возвращает
function log(name) {
    console.log(name);
}
// Ретерна не будет никогда: функция никогда не вернет ничего
function crash() {
    throw new Error('crash');
}
// Необязательный параметр определяется через ?
function logAnother(name, userId) {
    console.log('Hello', name, 'with id', userId || 'anonym');
}
// Работа со спред оператором
function average(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
exports.average = average;
// Практика: выполнить типизацию функции
function slice(str, start, end) {
    let newStr = '';
    let lastIndex;
    if (end) {
        lastIndex = end > str.length ? str.length : end;
    }
    else {
        lastIndex = str.length;
    }
    for (let i = start; i < lastIndex; i++) {
        newStr += str[i];
    }
    return newStr;
}
