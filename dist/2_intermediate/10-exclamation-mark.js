"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printName = void 0;
let word = null;
const num = 10;
if (num > 5) {
    word = 'abc';
}
console.log(word.toLowerCase());
function printName(name) {
    const fullName = name;
}
exports.printName = printName;
function printName2(person) {
    console.log(person.name);
}
const people = [
    {
        name: 'Gran',
        age: 70,
        sex: 'female'
    },
    {
        name: 'Papa',
        age: 72,
        sex: 'male'
    },
    {
        name: 'Mom',
        age: 35,
        sex: 'female'
    },
    {
        name: 'Dad',
        age: 38,
        sex: 'male'
    }
];
const femalePeople = people.find(person => person.sex === 'female');
