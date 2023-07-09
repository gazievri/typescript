"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.values = exports.keys = void 0;
function keys(obj) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
exports.keys = keys;
function values(obj) {
    const currentValues = [];
    for (let key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}
exports.values = values;
