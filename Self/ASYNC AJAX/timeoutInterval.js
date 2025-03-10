// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// Using setInterval.
// Using nested setTimeout.

function printNumbersInterval(from, to) {
  let current = from;

  let timerId = setInterval(function () {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

// printNumbersInterval(1, 1);

function printNumbersTimeout(from, to) {
  let current = from;

  setTimeout(function log() {
    if (current < to) {
      console.log(current);
      setTimeout(log, 1000);
    }
    current++;
  }, 1000);
}

// printNumbersTimeout(1, 5);
