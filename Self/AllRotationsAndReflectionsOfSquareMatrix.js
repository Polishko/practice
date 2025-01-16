function generateMagicSquares(baseSquare) {
  const n = baseSquare.length;

  // Helper function to rotate a matrix 90 degrees clockwise
  function rotateClockwise(matrix) {
    const rotated = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotated[j][n - 1 - i] = matrix[i][j];
      }
    }
    return rotated;
  }

  // Helper function to reflect a matrix horizontally
  function reflectHorizontally(matrix) {
    return matrix.slice().reverse();
  }

  // Helper function to reflect a matrix vertically
  function reflectVertically(matrix) {
    return matrix.map((row) => row.slice().reverse());
  }

  // Start with the base magic square
  const magicSquares = [];
  let currentSquare = baseSquare;

  // Add all rotations
  for (let i = 0; i < 4; i++) {
    magicSquares.push(currentSquare);
    currentSquare = rotateClockwise(currentSquare);
  }

  // Add reflections of the original and rotated versions
  currentSquare = reflectHorizontally(baseSquare);
  magicSquares.push(currentSquare);
  for (let i = 1; i < 4; i++) {
    currentSquare = rotateClockwise(currentSquare);
    magicSquares.push(currentSquare);
  }

  return magicSquares;
}

// Test the function
const baseMagicSquare = [
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2],
];

const allMagicSquares = generateMagicSquares(baseMagicSquare);
console.log(allMagicSquares);
