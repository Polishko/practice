// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// Using setInterval.
// Using nested setTimeout.

function printNumbersInterval(from, to) {
  let current = from;

  let timerId = setInterval(function () {
    console.log(current);
    if (current >= to) {
      clearInterval(timerId);
    }
    current += 1000;
  }, 1000);
}

// printNumbersInterval(1000, 5000);

function printNumbersTimeout(from, to) {
  let current = from;

  let timerId = setTimeout(function log() {
    if (current <= to) {
      console.log(current);
      current += 1000;
      timerId = setTimeout(log, 1000);
    }
  }, 1000);
}

printNumbersTimeout(1000, 5000);
