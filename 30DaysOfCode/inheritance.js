"use strict";

var _input = "";
var _index = 0;
process.stdin.on("data", (data) => {
  _input += data;
});
process.stdin.on("end", () => {
  _input = _input.split(new RegExp("[ \n]+"));
  main();
});
function read() {
  return _input[_index++];
}

/**** Ignore above this line. ****/

class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      "Name: " +
        this.lastName +
        ", " +
        this.firstName +
        "\nID: " +
        this.idNumber
    );
  }
}

class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here

  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here
  constructor(firstName, lastName, identification, testScores) {
    super(firstName, lastName, identification);
    this.testScores = testScores;
  }

  calculate() {
    const scoreSum = this.testScores.reduce((acc, curr) => acc + curr, 0);
    const aveScore = scoreSum === 0 ? 0 : scoreSum / this.testScores.length;

    if (90 <= aveScore && aveScore <= 100) {
      return "O";
    } else if (80 <= aveScore && aveScore < 90) {
      return "E";
    } else if (70 <= aveScore && aveScore < 80) {
      return "A";
    } else if (55 <= aveScore && aveScore < 70) {
      return "P";
    } else if (40 <= aveScore && aveScore < 55) {
      return "D";
    } else {
      return "T";
    }
  }
}

function main() {
  let firstName = read();
  let lastName = read();
  let id = +read();
  let numScores = +read();
  let testScores = new Array(numScores);

  for (var i = 0; i < numScores; i++) {
    testScores[i] = +read();
  }

  let s = new Student(firstName, lastName, id, testScores);
  s.printPerson();
  s.calculate();
  console.log("Grade: " + s.calculate());
}
