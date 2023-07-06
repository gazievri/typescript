 const x = 16

 const isXNegative = x >= 0 ? "no" : "yes"


 interface IStringRecord {
    [key: string] : string,
 }

 interface IDateRecords {
    [key: string] : Date,
 }

 // Условный тип: условие, только тернарные операторы
 type MyRecord<T> = T extends string ? IStringRecord : IDateRecords

 type obj1 = MyRecord<string>
 type obj2 = MyRecord<number>

 const o1: obj1 = {
    name: "3333"
 }

 const o2: obj2 = {
    name: new Date()
 }


 export {}