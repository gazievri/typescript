"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.move = void 0;
function isFish(pet) {
    return pet.swim !== undefined;
}
function move(animal) {
    if (isFish(animal)) {
        return animal.swim();
    }
    return animal.fly();
}
exports.move = move;
// function isNull(val: any): val is null {
//   return !val
// }
// const empty = ""
// const zero = 0
// if (isNull(empty)) {
//   empty
// }
// isNull(zero)
