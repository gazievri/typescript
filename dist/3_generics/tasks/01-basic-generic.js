"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.append = void 0;
function append(el, list) {
    return list.concat(el);
}
exports.append = append;
append(1, [2, 3, 4]);
