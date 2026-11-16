// const number1 = 12;
// const number2 = 17;
// const number3 = 24;

// if (number1 % 2 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (number2 % 2 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (number3 % 2 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }


function isEven(number) {
  return number % 2 === 0;
}
// console.log(isEven(12));
// console.log(isEven(17));
// console.log(isEven(24));
// console.log(isEven(0));
// console.log(isEven(101));
// console.log(isEven(200));

function isOdd(number) {
  return !isEven(number);
}
console.log(isOdd(3));
console.log(isOdd(4));
console.log(isOdd(17));
console.log(isOdd(20));

// function describeEven(number) {
//   const description = isEven(number) ? "even" : "odd";

//   return `${number} is ${description}`;
// }
// console.log(describeEven(12));
// console.log(describeEven(17));
// console.log(describeEven(24));
// const message = describeEven(12);
// console.log(message);
// console.log(describeEven());