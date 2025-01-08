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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

// Solution start
function staircase(n) {
  // Write your code here
  const space = " ";
  const symbol = "#";
  for (let i = 1; i <= n; i++) {
    console.log(`${space.repeat(n - i)}${symbol.repeat(i)}`);
  }
}
// Solution end

function main() {
  const n = parseInt(readLine().trim(), 10);

  staircase(n);
}
