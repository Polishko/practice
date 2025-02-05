// Altrenative 3, product array with division
const buildProductArray = (input) => {
  const zerosCount = 0;
  let product = 1;

  input.forEach((element) => {
    if (element === 0) {
      zerosCount++;
    } else {
      product = product * element;
    }
  });

  for (let i = 0; i < input.length; i++) {
    if (zerosCount === 0) {
      input[i] = product / input[i];
    } else if (zerosCount === 1 && input[i] == 0) {
      input[i] = product;
    } else {
      input[i] = 0;
    }
  }

  return input;
};

// Alternative 2, using single product array
// const buildProductArray = (input) => {
//   const results = [];
//   const len = input.length;
//   const RunningProduct = Array(len * 2).fill(1);

//   for (let i = 1; i < len; i++) {
//     RunningProduct[i] = RunningProduct[i - 1] * input[i - 1];

//     const endIdx = len - i;
//     RunningProduct[len + endIdx - 1] =
//       RunningProduct[len + endIdx] * input[endIdx];
//   }

//   for (let i = 0; i < len; i++) {
//     const productExceptSelf = RunningProduct[i] * RunningProduct[len + i];

//     results.push(productExceptSelf);
//   }

//   return results;
// };

// Alternative 1, O(n)
// const buildProductArray = (input) => {
//   const results = [];
//   const len = input.length;

//   const leftRunningProduct = Array(len).fill(1);
//   const rightRunningProduct = Array(len).fill(1);

//   // first item for left and last item for right will be 1, so start i = 1
//   for (let i = 1; i < len; i++) {
//     leftRunningProduct[i] = leftRunningProduct[i - 1] * input[i - 1];

//     const endIdx = len - 1 - i;
//     rightRunningProduct[endIdx] =
//       rightRunningProduct[endIdx + 1] * input[endIdx + 1];
//   }

//   for (let i = 0; i < len; i++) {
//     const leftProduct = leftRunningProduct[i];
//     const rightProduct = rightRunningProduct[i];
//     const productExceptSelf = leftProduct * rightProduct;

//     results.push(productExceptSelf);
//   }

//   return results;
// };

// Initial n**2 solution
// const buildProductArray = (input) => {
//   // Your solution here
//   let result = [];

//   for (let i = 0; i < input.length; i++) {
//     let product = 1;
//     for (let j = 0; j < input.length; j++) {
//       if (i !== j) {
//         product = product * input[j];
//       }
//     }

//     result.push(product);
//   }

//   return result;
// };

const input = [1, 2, 3, 4, 5];
console.log(buildProductArray(input));
