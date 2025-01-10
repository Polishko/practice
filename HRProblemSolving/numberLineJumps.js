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
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

// Solution start
function kangaroo(x1, v1, x2, v2) {
  if (v1 === v2) {
    return x1 === x2 ? "YES" : "NO";
  }

  const t = (x2 - x1) / (v1 - v2);

  return t > 0 && Number.isInteger(t) ? "YES" : "NO";
}
// Solution end

// Inefficient
// function kangaroo(x1, v1, x2, v2) {
//     // Write your code here
//     let isPossible = false;
//     if (v1 === v2 && x1 === x2) {
//         isPossible = true;
//     } else if ((v1 > v2 && x1 < x2) || (v2 > v1 && x2 < x1)) {
//         let [biggerDist, smallerDist] = [Math.max(x1, x2), Math.min(x1, x2)];
//         const [biggerJump, smallerJump] = [Math.max(v1, v2), Math.min(v1, v2)];

//         while (smallerDist < biggerDist) {
//             smallerDist += biggerJump;
//             biggerDist += smallerJump;
//             if (smallerDist === biggerDist) {
//                 isPossible = true;
//                 break;
//             }
//         }
//     }

//     if (isPossible) {
//         return 'YES';
//     } else {
//         return 'NO';
//     }
// }

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const x1 = parseInt(firstMultipleInput[0], 10);

  const v1 = parseInt(firstMultipleInput[1], 10);

  const x2 = parseInt(firstMultipleInput[2], 10);

  const v2 = parseInt(firstMultipleInput[3], 10);

  const result = kangaroo(x1, v1, x2, v2);

  ws.write(result + "\n");

  ws.end();
}
