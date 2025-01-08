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

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Solution start
function miniMaxSum(arr) {
  // Write your code here
  let minSum = Infinity;
  let maxSum = -Infinity;

  const totalSum = arr.reduce((acc, curr) => acc + curr, 0);

  for (let i = 0; i < arr.length; i++) {
    let sumWithExcluded = totalSum - arr[i];
    minSum = Math.min(minSum, sumWithExcluded);
    maxSum = Math.max(maxSum, sumWithExcluded);
  }
  console.log(`${minSum} ${maxSum}`);
}
// Solution end

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}

document.addEventListener();
