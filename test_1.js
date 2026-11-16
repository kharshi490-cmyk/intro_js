// let number = 23;
// let result;
// if (number % 10 >= 5) {
//     result = number + (10 - number % 10);
// } else {
//     result = number - number % 10;
// }
// console.log(result);

// const c=10;
// let b=20;
// let a=b=c+1;
// console.log(a);
// console.log(b);
// console.log(c);

const number = 17;
const lastDigit = number % 10;
const excess = lastDigit >= 5;
let result;
result = number - lastDigit + 10 * excess;
console.log(result);
