// Initian n**2 solution
const buildProductArray = (input) => {
  // Your solution here
  let result = [];

  for (let i = 0; i < input.length; i++) {
    let product = 1;
    for (let j = 0; j < input.length; j++) {
      if (i !== j) {
        product = product * input[j];
      }
    }

    result.push(product);
  }

  return result;
};

const input = [1, 2, 3, 4, 5];
console.log(buildProductArray(input));
