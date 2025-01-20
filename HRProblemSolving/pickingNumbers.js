function pickingNumbers(a) {
  // Write your code here
  let maxLength = -Infinity;

  for (let i = 0; i < a.length; i++) {
    let currPiece = [a[i]];
    for (let j = 0; j < a.length; j++) {
      if (i === j || Math.abs(a[i] - a[j]) > 1) {
        continue;
      } else {
        currPiece.push(a[j]);
      }
    }
    maxLength = Math.max(maxLength, currPiece.length);
  }

  return maxLength;
}

const a = [4, 6, 5, 3, 3, 1];
console.log(pickingNumbers(a));
