// function classify (number) {
//     if (number === 0) {
//         return "Zero";
//     }
//     if (number < 0) {
//         return "Negative";
//     }
//     return "Positive";
// }

// console.log(classify(43));
// console.log(classify(-73));
// console.log(classify(0));



function first() {
  console.log("first");
}

function second() {
  console.log("second");
  first();
}

console.log("start");
second();
console.log("end");
