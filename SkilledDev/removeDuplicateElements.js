// Sorted array in-place duplicate removal
function removeDuplicates(arr) {
  if (arr.length === 0) return arr;

  let uniqueIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[uniqueIndex]) {
      uniqueIndex++;
      arr[uniqueIndex] = arr[i];
    }
  }

  arr.length = uniqueIndex + 1;
  return arr;
}

arr = [1, 2, 3, 4, 5, 5, 6, 7];
console.log(removeDuplicates(arr));
