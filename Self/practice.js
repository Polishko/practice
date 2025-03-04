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

// function sum(a) {
//     return function f(b) {
//         return a + b;
//     }
// }

// console.log(sum(5)(-1));

// function byField(fieldName){
//     return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
//   }

// counter using closure
// function counter() {
//     let count = 1;
//     return function () {
//       return count++;
//     }
//  }

//  const counter = (x=1) => () => x++;

// Ask user for numerical outputs and return sum

// function sumInput() {
//   let arr = [];

//   while (true) {
//     let value = prompt('Enter a value', 0);

//     if (value === null || value === '' || !isFinite(value)) break;

//     arr.push(+value);
//   }

//   return arr.reduce((acc, curr) => acc + curr, 0);
// }

// alert(sumInput());

// Get max sub-sum, no for loop, O(n2) unfortunately :)
function getMaxSubSum(arr) {
  if (arr.length === 1) return arr[0];

  let maxSum = arr[0];
  let sum = arr[0];
  let start = 0;
  let end = arr.length - 1;
  let pointer = 0;

  while (start <= end) {
    if (start === end) {
      start++;
      sum = arr[start];
      end = arr.length - 1;
      pointer = start;
    }
    ++pointer;
    if (pointer > end) {
      if (sum > maxSum) {
        maxSum = sum;
      }
      pointer = start;
      end--;
      sum = arr[start];
      continue;
    }
    sum = sum + arr[pointer];
  }

  return maxSum;
}

// console.log(getMaxSubSum([1, 2, 3]));

// camelize string
function camelize(str) {
  if (!str.includes("-")) return str;

  return str
    .split("-")
    .map((item, idx) =>
      idx > 0 ? item[0].toUpperCase() + item.slice(1) : item
    )
    .join("");
}

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// extendable calculator
function Calculator() {
  this.operations = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let [val1, operator, val2] = str.split(" ");

    if (!this.operations[operator] || isNaN(val1) || isNaN(val2)) {
      return NaN;
    }

    return this.operations[operator](+val1, +val2);
  };

  this.addMethod = function (name, func) {
    this.operations[name] = this.operations[name]
      ? this.operations[name]
      : func;
  };
}

// let calc = new Calculator;
// console.log(calc.calculate('1 + 3'));
// let powerCalc = new Calculator;
// powerCalc.addMethod("/", (a, b) => a / b);
// console.log(powerCalc.calculate("2 / 3"));

// map to user names
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith

// sort by age
let kary = { name: "Kary", age: 25 };
let gary = { name: "Gary", age: 30 };
let perry = { name: "Perry", age: 28 };

let arr = [kary, gary, perry];

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr);

// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

// shuffle array
let myArr = [1, 2, 3];

function shuffle(myArr) {
  let max;
  let idx;
  let removed;
  let copy = myArr.slice();
  let newArr = [];

  while (copy.length > 0) {
    max = Math.floor(copy.length - 1);

    idx = Math.floor(Math.random() * (max + 1));
    removed = copy.splice(idx, 1);
    newArr.push(removed[0]);
  }

  return newArr;
}

// console.log(shuffle(myArr));
// // arr = [3, 2, 1]

// console.log(shuffle(myArr));
// // arr = [2, 1, 3]

// console.log(shuffle(myArr));
// // arr = [3, 1, 2]
// // ...

// recommended: Fisher-Yates shuffle, unbiased & optimized
function unbiasedSuffle(myArr) {
  for (let i = myArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [myArr[i], myArr[j]] = [myArr[j], myArr[i]];
  }

  return myArr;
}

// console.log(unbiasedSuffle(myArr));
// arr = [3, 2, 1]

// console.log(unbiasedSuffle(myArr));
// // arr = [2, 1, 3]

// console.log(unbiasedSuffle(myArr));
// // arr = [3, 1, 2]
// // ...

// average
let alice = { name: "Alice", age: 25 };
let pan = { name: "Pan", age: 30 };
let feya = { name: "Feya", age: 29 };

let someArr = [alice, pan, feya];

function getAverageAge(arr) {
  return arr.reduce((acc, curr) => acc + curr.age, 0) / arr.length;
}

// console.log(getAverageAge(someArr)); // (25 + 30 + 29) / 3 = 28

// unique elements
function unique(strings) {
  let result = [];
  for (str of strings) {
    if (!result.includes(str)) result.push(str);
  }

  return result.join(", ");
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

// console.log( unique(strings) ); // Hare, Krishna, :-O

// user data group
let usersArr = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
  return arr.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let usersById = groupById(usersArr);
// console.log(usersById);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// range funct
function range(start, stop, step) {
  if (arguments.length === 1) {
    return range(0, arguments[0], 1);
  } else if (arguments.length === 2) {
    return range(arguments[0], arguments[1], 1);
  } else {
    if (step === 0) {
      return Array(stop - start).fill(start);
    }

    let rangeArr = [];
    for (let i = start; i < stop; i += step) {
      rangeArr.push(i);
    }

    return rangeArr;
  }
}

// console.log(range(1));
// console.log(range(1, 5));
// console.log(range(1));
// console.log(range(1, 1, 1));
// console.log(range(1, 2, 1));
// console.log(range(2, 6, 2));
// console.log(range(1, 5, 0));
// console.log(range(0, 2, 0));
// console.log(range(2, 1));

// Remove all occurrences of items of b from a (where a & b are arrays)
function arrayDiff(a, b) {
  for (item of b) {
    while (true) {
      let idx = a.indexOf(item);
      if (idx === -1) break;
      a.splice(idx, 1);
    }
  }

  return a;
}

// check in arr values are arr
const arrCheck = function func(arr) {
  return arr.every((value) => Array.isArray(value));
};

// console.log(arrCheck([[1],[2]]));
// console.log(arrCheck(['1','2']));
// console.log(arrCheck([{1:1},{2:2}]));

// find unique
function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0];
}

// console.log(findUniq([ 0, 0, 0.55, 0, 0 ]) );
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));

let str = "1.1";
// console.log(+str);

function solve(arr) {
  arr.sort((a, b) => b - a);
  left = 0;
  right = arr.length - 1;

  let newArr = [];
  while (left <= right) {
    if (left != right) newArr.push(arr[left]);
    newArr.push(arr[right]);
    left++;
    right--;
  }

  return newArr;
}

// arr.sort((a, b) => b - a);
// len = arr.length % 2 === 0 ? Math.ceil(arr.length / 2) : Math.ceil(arr.length / 2) + 1;

// for (i = 0; i <= len; i+=2) {
//   arr.splice(i + 1, 0, arr.pop());
// }

// return arr;
// }

// console.log(solve([15,11,10,7,12]));
// console.log(solve([87, 80, 79, 78, 74, 63, 52, 31, 16]));
// At some point, the elements towards the middle start shifting slightly because splice() moves the unprocessed elements one index further each time.

// flatten array

function flattenNestedArray(arr) {
  return arr.reduce((acc, curr) => {
    acc.push(...curr);
    return acc;
  }, []);

  // alternative
  return arr.reduce((acc, curr) => acc.concat(curr), []);
}

// console.log(flattenNestedArray([[10], [20, 30], [40, 50, 60]]));

// diagonal modification
function matrix(array) {
  let copy = array.slice();

  for (let i = 0; i < copy.length; i++) {
    copy[i][i] = copy[i][i] >= 0 ? 1 : 0;
  }

  return copy;
}

// Create N dimentional array
const createNDimensionalArray = (n, size, count = 1) => {
  if (n === 1) {
    return Array(size).fill(`level ${count}`);
  }

  count += 1;
  return Array(size).fill(createNDimensionalArray(n - 1, size, count));
};

// console.log(JSON.stringify(createNDimensionalArray(2, 3), null, 2));
// console.log(JSON.stringify(createNDimensionalArray(3, 2), null, 2));

// from function constructor to class

// function
function Clock({ template }) {
  let timer;

  function render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  this.stop = function () {
    clearInterval(timer);
  };

  this.start = function () {
    render();
    timer = setInterval(render, 1000);
  };
}

// let clock = new Clock({template: 'h:m:s'});
// clock.start();

// class

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//     this.timer = null;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop = () => {
//     clearInterval(this.timer);
//   };

//   start = () => {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   };
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();


// Make private prop accessible from derived classes
// class Class {
//   static #foo = 42;

//   static get foo() {
//     return this.#foo;
//   }
// }
class Class {
  static #foo = 42;

  static get foo() {
    return Class.#foo;
  } 
}

// Fix Rabbit

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
// console.log(rabbit.name);

// Extended Clock
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

// Create a new class ExtendedClock that inherits from Clock
// and adds the parameter precision – the number of ms between “ticks”. Should be 1000 (1 second) by default.

class ExtendedClock extends Clock {
  constructor({ template, precision=1000 }) {
    super({template});
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}