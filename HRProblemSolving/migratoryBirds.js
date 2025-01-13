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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
// Solution start
function migratoryBirds(arr) {
  let birdTypes = {};
  let maxCount = 0;
  let mostFrequentBird = Infinity;

  for (let type of arr) {
    birdTypes[type] = (birdTypes[type] || 0) + 1;

    if (
      birdTypes[type] > maxCount ||
      (birdTypes[type] === maxCount && type < mostFrequentBird)
    ) {
      maxCount = birdTypes[type];
      mostFrequentBird = type;
    }
  }

  return mostFrequentBird;
}

// Less efficient
// function migratoryBirds(arr) {
//   // Write your code here
//   let birdTypes = {};
//   for (let type of arr) {
//     const birdType = new String(type);
//     if (!birdTypes.hasOwnProperty(type)) {
//       birdTypes[type] = 0;
//     }

//     birdTypes[birdType] += 1;
//   }

//   const sortedBirds = Object.entries(birdTypes).sort(
//     ([key1, val1], [key2, val2]) => {
//       if (key1 === key2) {
//         return Number(key1) - Number(key2);
//       }

//       return val2 - val1;
//     }
//   );

//   return sortedBirds[0][0];
// }
// Solution end

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + "\n");

  ws.end();
}
