function fibonacci(n) {
    const fibonacciSeries = [];
    if (n === 1) fibonacciSeries.push(0);
    if (n === 2) fibonacciSeries.splice(0, 0, 0, 1);
    if (n > 2) {
        fibonacciSeries.splice(0, 0, 0, 1);
        for (let i = 2; i < n; i++) {
            fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2])
        }
    }
    return fibonacciSeries;
}

console.log(fibonacci(5));
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));


// function fibonacci(n) {
//     if (n === 1) return 0;
//     if (n === 2) return 1;
//     if (n > 2) return fibonacci(n - 1) + fibonacci(n - 2);
// }

// function fibonacciArray(n) {
//     const array = [];
//     if (n === 0) return array;
//     for (let i = 1; i <= n; i++) {
//         array.push(fibonacci(i));
//     }
//     return array;
// }

// console.log(fibonacciArray(5));
// console.log(fibonacciArray(0));
// console.log(fibonacciArray(1));
// console.log(fibonacciArray(2));


