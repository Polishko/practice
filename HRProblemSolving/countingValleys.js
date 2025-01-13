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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

// Solutions start
function countingValleys(steps, path) {
  // Write your code here
  let level = 0;
  let valleyCount = 0;

  for (let step of path) {
    if (step === "U") {
      level += 1;
      if (level === 0) {
        valleyCount += 1;
      }
    } else {
      level -= 1;
    }
  }

  return valleyCount;
}

// function countingValleys(steps, path) {
//     // Write your code here
//     let level = 0;
//     let valleyCount = 0;

//     for (let step of path) {
//         let newLevel = level;
//         step === 'D' ? newLevel -= 1 : newLevel += 1;

//         if (level < 0 && newLevel === 0) {
//             valleyCount += 1;
//         }

//         level = newLevel;
//     }

//     return valleyCount;
// }
// Solutions end

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const steps = parseInt(readLine().trim(), 10);

  const path = readLine();

  const result = countingValleys(steps, path);

  ws.write(result + "\n");

  ws.end();
}
