function processData(input) {
  //Enter your code here
  const [keyValuePairCount, ...rest] = input.split("\n");
  let phoneBook = {};

  for (let i = 0; i < rest.length; i++) {
    if (i <= keyValuePairCount - 1) {
      const [key, value] = rest[i].split(" ");
      phoneBook[key] = value;
    } else {
      const attr = rest[i];
      phoneBook.hasOwnProperty(attr)
        ? console.log(`${attr}=${phoneBook[attr]}`)
        : console.log("Not found");
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
