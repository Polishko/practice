const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbzndbd");

console.log(myArray);

const myRe2 = /d(b+)d/;
const myArray2 = myRe2.exec("cdbbdbsbzndbd");

console.log(myArray2);

const myRe3 = /d(b+)d/g;
const myArray3 = "cdbbdbsbzndbd".match(myRe3);

console.log(myArray3);

const myRe4 = /d(b+)d/;
const myArray4 = "cdbbdbsbzndbd".match(myRe4);

console.log(myArray4);
