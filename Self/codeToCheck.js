// console.log(true == "1");  // true
// console.log(false == "0"); // true
// console.log(false == "");  // true
// console.log(false == []);  // true
// console.log(false == {});  // false ❗ (important)
// console.log([])
// console.log(![])
// console.log(!{})
// console.log(undefined == null)
// alert(undefined == null)
// console.log(-("42"))
// console.log(-(42))
// console.log(num.toString(16))
// let num = 16
// let str = num.toString()
// console.log(typeof str)
// console.log(0.2 + 0.1 === 0.3);
// console.log(0.2 + 0.1 == 0.3);
// console.log(Object.is(NaN, NaN))
// console.log(NaN === NaN)
// console.log(6.35.toFixed(1)) // rounded down unexpected, precision lost because of binary conversion
// console.log(((6.35 * 10).toFixed()/10).toFixed(1))
// let str = "InTerface";
// str.toLowerCase();
// console.log(str);
// let str2 = str.toLowerCase();
// console.log(str2)
// console.log(5 + true)

// var OrderPeople = function(people){
//     return people.sort( (a, b) => a.age - b.age); //complete this function
//   }

// console.log(OrderPeople([ { age: 83, name: 'joel' },
//     { age: 46, name: 'roger' },
//     { age: 99, name: 'vinny' },
//     { age: 26, name: 'don' }])[0])

// function combine(...objects) {
//     return objects.reduce((acc, obj) => {
//         for (let [key, val] of Object.entries(obj)) {
//             acc[key] = (acc[key] || 0) + val;
//         }

//         return acc;
//     }, {});
// }

// const obj1 = { a: 10, b: 20, c: 30 };
// const obj2 = { a: 3, c: 6, d: 3 };

// console.log(combine(obj1, obj2));

"use strict";

// function foo() {
//   foo = 1;
// }
// foo();
// console.log(foo);

// (function foo() {
//     foo = 1; // TypeError: Assignment to constant variable.
//   })();

function Foo() {}

let x = new Foo();
console.log(x.constructor.name);

