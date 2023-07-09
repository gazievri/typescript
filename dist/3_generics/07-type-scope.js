"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTuple = void 0;
function createTuple(first) {
    return function (second) {
        return [first, second];
    };
}
exports.createTuple = createTuple;
const toTupleWIth1 = createTuple(1);
const val1 = toTupleWIth1(1);
const val2 = toTupleWIth1('2');
