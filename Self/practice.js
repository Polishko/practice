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

// Combine objects where values of shared keys are summed
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

// Functions as params

// function Adam() {
//     return (arguments[0]) ? `Adam ${arguments[0]}`: "Adam."; 
//   }

// function has() {
//     return (arguments[0]) ? `has ${arguments[0]}`: "has."; 
//   }

// function a() {
//     return (arguments[0]) ? `a ${arguments[0]}`: "a."; 
//   }

// function dog() {
//     return (arguments[0]) ? `dog ${arguments[0]}`: "dog."; 
//   }

// function The() {
//     return (arguments[0]) ? `The ${arguments[0]}`: "The."; 
//   }

// function title() {
//     return (arguments[0]) ? `title ${arguments[0]}`: "title."; 
// }

// function of() {
//     return (arguments[0]) ? `of ${arguments[0]}`: "of."; 
//   }

// function the() {
//     return (arguments[0]) ? `the ${arguments[0]}`: "the."; 
//   }

// function is() {
//     return (arguments[0]) ? `is ${arguments[0]}`: "is."; 
//   }

// function also() {
//     return (arguments[0]) ? `also ${arguments[0]}`: "also."; 
//   }


// console.log(Adam(has(a(dog()))));
// console.log(The(title(of(the(dog(is(also(Adam()))))))));
// // console.log(Adam())


// write sum(a)(b) -> a + b

function sum(a) {
    return function f(b) {
        return a + b;
    }
}

console.log(sum(5)(-1));