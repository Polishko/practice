"use strict";

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

// Solution start
function main() {
  const n = parseInt(readLine().trim(), 10);
  const binaryN = n.toString(2);
  let maxLength = -Infinity;
  let count = 0;

  for (let i = 0; i < binaryN.length; i++) {
    if (binaryN[i] === "1") {
      count++;
    } else {
      maxLength = Math.max(count, maxLength);
      count = 0;
    }
  }
  maxLength = Math.max(count, maxLength);

  console.log(maxLength);
}
// Solution end
