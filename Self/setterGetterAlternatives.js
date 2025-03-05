// with function constructor
function NamedOne(first, last) {
  // -- SHOULD be changed --
  this.firstName = first;
  this.lastName = last;
  // this.fullName = function () {
  //   return this.firstName + " " + this.lastName;
  // };

  Object.defineProperty(this, "fullName", {
    get: function () {
      return this.firstName + " " + this.lastName;
    },

    set: function (value) {
      let [first, last] = value.split(" ");
      if (first && last) {
        this.firstName = first;
        this.lastName = last;
      }
    },
  });
}

//   let namedOne = new NamedOne("Naomi", "Wang");
//   console.log(namedOne.fullName);
//   namedOne.firstName = "John";
//   namedOne.lastName = "Doe";
//   console.log(namedOne.fullName);

// With object literal
let namedOne2 = {
  firstName: "Naomi",
  lastName: "Wang",

  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  set fullName(value) {
    let [first, last] = value.split(" ");
    if (first && last) {
      this.firstName = first;
      this.lastName = last;
    }
  },
};

// console.log(namedOne2.fullName);
// namedOne2.firstName = "John";
// namedOne2.lastName = "Doe";
// console.log(namedOne2.fullName);

// Using class
class NamedOne3 {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  set fullName(value) {
    let [first, last] = value.split(" ");
    if (first && last) {
      this.firstName = first;
      this.lastName = last;
    }
  }
}

let namedOne = new NamedOne("Naomi", "Wang");
console.log(namedOne.fullName);
namedOne.firstName = "John";
namedOne.lastName = "Doe";
console.log(namedOne.fullName);
