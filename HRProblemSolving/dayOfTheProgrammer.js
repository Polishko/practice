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
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

// Start solution
function dayOfProgrammer(year) {
  // Write your code here
  let monthDay = "13";

  if (
    (year >= 1700 && year <= 1917 && year % 4 === 0) ||
    (year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)))
  ) {
    monthDay = "12";
  } else if (year === 1918) {
    monthDay = "26";
  }

  return `${monthDay}.09.${year}`;
}
//Solution end

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = parseInt(readLine().trim(), 10);

  const result = dayOfProgrammer(year);

  ws.write(result + "\n");

  ws.end();
}
