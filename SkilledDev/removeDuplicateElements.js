// Sorted array in-place duplicate removal
// function removeDuplicates(arr) {
//   if (arr.length === 0) return arr;

//   let uniqueIndex = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[uniqueIndex]) {
//       uniqueIndex++;
//       arr[uniqueIndex] = arr[i];
//     }
//   }

//   arr.length = uniqueIndex + 1;

//   return arr;
// }

// Un-orted array in-place duplicate removal
function removeDuplicates(arr) {
  if (arr.length === 0) return arr;
  const uniqueElements = new Set();
  let uniqueIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueElements.has(arr[i])) {
      uniqueElements.add(arr[i]);
      arr[uniqueIndex] = arr[i];
      uniqueIndex++;
    }
  }

  arr.length = uniqueIndex;

  return arr;
}

arr = [1, 2, 3, 4, 5, 4, 6, 7];
console.log(removeDuplicates(arr));
