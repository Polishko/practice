const walkMatrix = (matrix) => {
  // Your solution here
  let finalArray = [];

  while (matrix.length > 0) {
    // forward
    while (matrix[0] && matrix[0].length > 0) {
      finalArray.push(matrix[0].shift());
    }
    matrix.shift();

    // downward
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i] && matrix[i].length > 0) {
        finalArray.push(matrix[i].pop());
      }
    }

    // backward
    let lastIndex = matrix.length - 1;

    while (matrix[lastIndex] && matrix[lastIndex].length > 0) {
      finalArray.push(matrix[matrix.length - 1].pop());
    }
    matrix.pop();

    // upward
    for (let i = matrix.length - 1; i >= 0; i--) {
      if (matrix[i] && matrix[i].length > 0) {
        finalArray.push(matrix[i].shift());
      }
    }
  }

  return finalArray;
};

const matrix = [
  [0, 1, 2, 3],
  [11, 12, 13, 4],
  [10, 15, 14, 5],
  [9, 8, 7, 6],
];

console.log(walkMatrix(matrix));
