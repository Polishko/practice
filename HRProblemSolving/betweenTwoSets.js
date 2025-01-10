"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

// Solution start
function getTotalX(a, b) {
  // Greatest common factor
  let gcd = (x, y) => (!y ? x : gcd(y, x % y));

  // Least common divisor
  let lcm = (x, y) => (x * y) / gcd(x, y);

  // LCM for array a
  let lcmA = a[0];
  for (let i = 1; i < a.length; i++) {
    lcmA = lcm(lcmA, a[i]);
  }

  // GCD for array b
  let gcdB = b[0];
  for (let i = 1; i < b.length; i++) {
    gcdB = gcd(gcdB, b[i]);
  }

  // Nums divisible by LCM and that divide GCD
  let count = 0;
  for (let i = lcmA; i <= gcdB; i += lcmA) {
    if (gcdB % i === 0) {
      count++;
    }
  }

  return count;
}

// Less efficient
// function getTotalX(a, b) {
//   // Write your code here
//   const sortedB = b.sort();
//   const sortedA = a.sort();
//   let sharedFactors = [];
//   let numbersBetween = [];

//   for (let i = 1; i <= sortedB[0]; i++) {
//     let allShared = true;
//     for (let num of b) {
//       if (num % i !== 0) {
//         allShared = false;
//         break;
//       }
//     }
//     if (allShared) sharedFactors.push(i);
//   }

//   sharedFactors = sharedFactors.filter(
//     (factor) => factor >= sortedA[sortedA.length - 1]
//   );

//   for (let factor of sharedFactors) {
//     let numIsFactor = true;
//     for (let num of a) {
//       if (factor % num !== 0) {
//         numIsFactor = false;
//         break;
//       }
//     }
//     if (numIsFactor) numbersBetween.push(factor);
//   }

//   return numbersBetween.length;
// }

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const m = parseInt(firstMultipleInput[1], 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const brr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((brrTemp) => parseInt(brrTemp, 10));

  const total = getTotalX(arr, brr);

  ws.write(total + "\n");

  ws.end();
}
