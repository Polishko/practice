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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// Solution start
function timeConversion(s) {
  // Write your code here
  let [hourString, minute, lastPart] = s.split(":");
  let hour = parseInt(hourString);
  let [second, symbol] = [lastPart.slice(0, 2), lastPart.slice(2)];

  if (symbol === "AM" && hour === 12) {
    hour = 0;
  } else if (symbol === "PM" && hour !== 12) {
    hour += 12;
  }
  return `${hour.toString().padStart(2, "0")}:${minute}:${second}`;
}

// RegExp practiced
// function timeConversion(s) {
//   // Write your code here
//   const regExpPattern =
//     /(?<group1>\d{2})(?<group2>:\d{2}:\d{2})(?<group3>[A-Z]{2})/;
//   const match = s.match(regExpPattern);
//   let groupOneMatch = parseInt(match[1]);
//   const groupTwoMatch = match[2];
//   const groupThreeMatch = match[3];
//   if (groupThreeMatch == "PM" && groupOneMatch < 10)
//     groupOneMatch = groupOneMatch + 12;
//   return groupOneMatch + groupTwoMatch;
// }
// Solution end

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
