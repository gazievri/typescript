"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nums = [1, 2, [1, 2, [12, [123]]]];
nums.push(1);
nums.push([1, [12]]);
function isJSON(arg) { }
isJSON("hi");
isJSON(1);
isJSON({ a: [123], v: { x: 1 } });
isJSON([1, { x: '' }]);
