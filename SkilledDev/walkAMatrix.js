// Optimized solution with index tracking, handles jagged matrices
const walkMatrix = (matrix) => {
  const result = [];

  let startRow = 0;
  let endRow = matrix.length - 1;
  let startColumn = 0;
  let endColumn = Math.max(...matrix.map((row) => row.length)) - 1; // Find the widest row

  while (endRow >= startRow && endColumn >= startColumn) {
    // Forward (Left to Right)
    for (let col = startColumn; col <= endColumn; col++) {
      if (matrix[startRow] && matrix[startRow][col] !== undefined) {
        result.push(matrix[startRow][col]);
      }
    }
    startRow++;

    // Downward (Top to Bottom)
    for (let row = startRow; row <= endRow; row++) {
      if (matrix[row] && matrix[row][endColumn] !== undefined) {
        result.push(matrix[row][endColumn]);
      }
    }
    endColumn--;

    // Backward (Right to Left)
    if (endRow >= startRow) {
      for (let col = endColumn; col >= startColumn; col--) {
        if (matrix[endRow] && matrix[endRow][col] !== undefined) {
          result.push(matrix[endRow][col]);
        }
      }
    }
    endRow--;

    // Upward (Bottom to Top)
    if (endColumn >= startColumn) {
      for (let row = endRow; row >= startRow; row--) {
        if (matrix[row] && matrix[row][startColumn] !== undefined) {
          result.push(matrix[row][startColumn]);
        }
      }
    }
    startColumn++;
  }

  return result;
};

// Initial unoptimized solution using index shifting
// const walkMatrix = (matrix) => {
//   // Your solution here
//   let finalArray = [];

//   while (matrix.length > 0) {
//     // forward
//     while (matrix[0] && matrix[0].length > 0) {
//       finalArray.push(matrix[0].shift());
//     }
//     matrix.shift();

//     // downward
//     for (let i = 0; i < matrix.length; i++) {
//       if (matrix[i] && matrix[i].length > 0) {
//         finalArray.push(matrix[i].pop());
//       }
//     }

//     // backward
//     let lastIndex = matrix.length - 1;

//     while (matrix[lastIndex] && matrix[lastIndex].length > 0) {
//       finalArray.push(matrix[matrix.length - 1].pop());
//     }
//     matrix.pop();

//     // upward
//     for (let i = matrix.length - 1; i >= 0; i--) {
//       if (matrix[i] && matrix[i].length > 0) {
//         finalArray.push(matrix[i].shift());
//       }
//     }
//   }

//   return finalArray;
// };

const matrix = [
  [0, 1, 2, 3],
  [11, 12, 13, 4],
  [10, 15, 14, 5],
  [9, 8, 7, 6],
];

console.log(walkMatrix(matrix));
