// const x = 10;
// if (true) {
//   const x = 20;
//   console.log(x);
// }
// console.log(x);


// function test() {
//   const number = 12;
//   console.log(number);
// }
// test();


// function first() {
//   console.log("A");
// }

// function second() {
//   console.log("B");
//   first();
//   console.log("C");
// }

// console.log("D");
// second();
// console.log("E");



function isEven(number) {
  return number % 2 === 0;
}

function describe(number) {
  if (isEven(number)) {
    return "even";
  }

  return "odd";
}

console.log("start");
console.log(describe(7));
console.log(describe(12));
console.log("end");