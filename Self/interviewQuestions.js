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
const buttonElement = document.querySelector("button");
const colors = ["blue", "red", "green", "gray", "purple"];

buttonElement.addEventListener("click", function () {
  document.body.style.background =
    colors[Math.floor(Math.random() * colors.length)];
});
