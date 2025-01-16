function formingMagicSquare(s) {
  // Write your code here
  function findSum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }

  const col1 = [s[0][0], s[1][0], s[2][0]];
  const col2 = [s[0][1], s[1][1], s[2][1]];
  const col3 = [s[0][2], s[1][2], s[2][2]];

  const diag1 = [s[0][0], s[1][1], s[2][2]];
  const diag2 = [s[0][2], s[1][1], s[2][0]];

  let line1Sum = findSum(s[0]);
  let line2Sum = findSum(s[1]);
  let line3Sum = findSum(s[2]);
  let col1Sum = findSum(col1);
  let col2Sum = findSum(col2);
  let col3Sum = findSum(col3);
  let diag1Sum = findSum(diag1);
  let diag2Sum = findSum(diag2);

  const allSums = line1Sum;
}
