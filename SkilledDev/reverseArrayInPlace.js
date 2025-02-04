function reverseNumericArray(arr) {
  const len = arr.length;
  const n = Math.floor(len / 2);

  for (let i = 0; i < n; i++) {
    arr[i] = arr[i] + arr[len - i - 1];
    arr[len - i - 1] = arr[i] - arr[len - i - 1];
    arr[i] = arr[i] - arr[len - i - 1];
  }

  return arr;
}

arr = [1, 2, 3, 4, 5, 6];
console.log(reverseNumericArray(arr));

// swap for non-numeric arrays
function reverseArray(arr) {
  const len = arr.length;
  const n = Math.floor(len / 2);

  for (let i = 0; i < n; i++) {
    [arr[i], arr[len - 1 - i]] = [arr[len - 1 - i], arr[i]];
  }

  return arr;
}

arr = ["a", "b", "c", "d"];
console.log(reverseArray(arr));
