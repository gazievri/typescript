"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.length = void 0;
function length(arg) {
    return arg.length;
}
exports.length = length;
length('mama'); // ok
length(['mama']); // ok
length({ length: 1 }); // ok
length(123); // функция работать не будет, так длинны у чисел нет, надо ограничить типы
length(true); // тоже самое - работать не будет
