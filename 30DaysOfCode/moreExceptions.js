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

// Solution (no conditionals allowed)
function main() {
  const S = readLine();
  try {
    const num = JSON.parse(S);
    console.log(num);
  } catch (e) {
    console.log("Bad String");
  }
}
