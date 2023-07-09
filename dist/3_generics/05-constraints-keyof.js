"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prop = void 0;
function prop(key, obj) {
    return obj[key];
}
exports.prop = prop;
const obj1 = { a: 1, b: 2, c: 3 };
prop('a', obj1);
// prop('f', obj1) // Выдаст ошибку так как U нет в T
