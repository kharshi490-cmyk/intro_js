// function double(number) {
//   return number * 2;
// }

// function addOne(number) {
//   return number + 1;
// }

// function add(a,b) {
//     return a+b;
// }

// console.log(add(double(4), addOne(4)));

// console.log(addOne(double(5)));

// function factorial(number) {
//   if (number === 1) {
//     return 1;
//   }

//   return number * factorial(number - 1);
// }
// console.log(factorial(5));


// function f(number) {
//     return g(number);
// }

// function g(number) {
//     return h(number);
// }

// function h(number) {
//     return number + 1;
// }

// console.log(f(5));


function f(number) {
  if (number === 0) {
    console.log("done");
    return 0;
  }

  console.log("enter", number);

  const result = f(number - 1);

  console.log("leave", number);

  return result + number;
}

console.log(f(3));
