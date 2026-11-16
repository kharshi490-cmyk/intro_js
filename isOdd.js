function isEven(number) {
  return number % 2 === 0;
}
function isOdd (number) {
    return !isEven(number);
}
console.log(isOdd(23));
console.log(isOdd(56));
console.log(isOdd(0));
console.log(isOdd(-6));
console.log(isOdd(-45));