"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fromPair(pair) {
    const [key, value] = pair;
    return { [key]: value };
}
const myPair = ['myKey', 'myValue'];
// Ошибка
fromPair(myPair);
