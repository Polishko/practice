function addToArray(root, bstArray, idx, item) {
  if (item <= root) {
    if (bstArray[2 * idx + 1] === null) {
      bstArray[2 * idx + 1] = item;
    } else {
      addToArray(bstArray[2 * idx + 1], bstArray, 2 * idx + 1, item);
    }
  } else {
    if (bstArray[2 * idx + 2] === null) {
      bstArray[2 * idx + 2] = item;
    } else {
      addToArray(bstArray[2 * idx + 2], bstArray, 2 * idx + 2, item);
    }
  }
}

function binarySearchTree(arr) {
  let bstArray = new Array(arr.length * 2).fill(null); // Extra space to consider empty slots (leaves)
  let root = arr[0];
  bstArray[0] = root;

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    addToArray(root, bstArray, 0, current);
  }

  return bstArray.filter((ele) => ele !== null);
}

let arr = [3, 5, 4, 7, 2, 1];
console.log(binarySearchTree(arr));
