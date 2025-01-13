// Palindrome check
function isPalindrome(str) {
  // Your code here
  let midIndex = Math.floor(str.length / 2);
  for (let i = 0; i <= midIndex; i++) {
    if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("hello")); // false

// Random background color on button click
// const buttonElement = document.querySelector("button");
// const colors = ["blue", "red", "green", "gray", "purple"];

// buttonElement.addEventListener("click", function () {
//   document.body.style.background =
//     colors[Math.floor(Math.random() * colors.length)];
// });

// Remember map exact syntaxis
function squareNumbers(arr) {
  return arr.map((num) => num ** 2);
}

let arr = [1, 2, 3, 4];
console.log(squareNumbers(arr));

// typeof null and NAN
console.log(typeof null);
console.log(typeof NAN);

// Create button
// const buttonElement = document.createElement('button');
// buttonElement.textContent = 'Click me'; // Add button text
// const bodyElement = document.querySelector('body');
// bodyElement.appendChild(buttonElement);

// buttonElement.addEventListener('click', function () {
//     const pElement = document.createElement('p');
//     pElement.textContent = 'Button clicked!';
//     bodyElement.appendChild(pElement);
// });
