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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Solution start
function plusMinus(arr) {
  // Write your code here
  const arrLength = arr.length;
  const negativeFraction = arr.filter((num) => num < 0).length;
  const pozitiveFraction = arr.filter((num) => num > 0).length;
  const zeroFraction = arr.filter((num) => num === 0).length;

  console.log((pozitiveFraction / arrLength).toFixed(6));
  console.log((negativeFraction / arrLength).toFixed(6));
  console.log((zeroFraction / arrLength).toFixed(6));
}
//Solution end

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
