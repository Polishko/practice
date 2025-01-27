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

function main() {
  const n = parseInt(readLine().trim(), 10);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  // Write your code here
  let copyArray = a.slice();
  let swapTimes = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (copyArray[j] > copyArray[j + 1]) {
        copyArray[j] = copyArray[j] + copyArray[j + 1];
        copyArray[j + 1] = copyArray[j] - copyArray[j + 1];
        copyArray[j] = copyArray[j] - copyArray[j + 1];
        swapTimes++;
      }
    }

    if (swapTimes == 0) break;
  }

  console.log(`Array is sorted in ${swapTimes} swaps.`);
  console.log(`First Element: ${copyArray[0]}`);
  console.log(`Last Element: ${copyArray[n - 1]}`);
}
