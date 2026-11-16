// for (let n = 0; n < 20; n = n + 2) {
//     console.log(n);
// }
// let n = 0;
// while (n < 20) {
//     console.log(n);
//     n = n + 2;
// }

// for (let n = 1; n < 100; n = n * 2) {
//     console.log(n);
// }

// for (let n = 100; n > 1; n = n / 2) {
//     console.log(n);
// } 

// let n = 10;
// while (n < 10) {
//     console.log(n);
// }
// let n = 10;
// do {
//     console.log(n);
// } while (n < 10);

// for (let i = 0; i < 5; i = i + 1) {
//     for (let j = 0; j < 2; j = j + 1) {
//         console.log(i, j);
//     }
// }

// let i = 0;
// while (i < 5) {
//     let j = 0;
//     while (j < 2) {
//         console.log(i, j);
//         j = j + 1;
//     }
//     i = i + 1;
// }

// for (let n = 0; n < 10; n = n + 1) {
//     if (n === 5) {
//         break;
//     }
//     console.log(n);
// }

for (let n = 0; n < 10; n = n + 1) {
    if (n % 2 === 0) {
        continue;
    }
    console.log(n);
}