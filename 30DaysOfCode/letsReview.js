// Solution start
//Slight optimization
function processData(input) {
  //Enter your code here
  const [num, ...inputs] = input.split("\n");

  for (let i = 0; i < num; i++) {
    let output = ["", ""];

    for (let char of inputs[i]) {
      if (output[0].length <= output[1].length) {
        output[0] += char;
      } else {
        output[1] += char;
      }
    }

    console.log(`${output[0]} ${output[1]}`);
  }
}

// Solution one
// function processData(input) {
//   //Enter your code here
//   const [num, ...inputs] = input.split("\n");

//   for (let i = 0; i < num; i++) {
//     let output = ["", ""];
//     inputs[i].split("").forEach((element, index) => {
//       if (index % 2 === 0) {
//         output[0] += output[0];
//       } else {
//         output[1] += output[1];
//       }
//     });

//     console.log(`${output[0]} ${output[1]}`);
//   }
// }
// Solution end

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
