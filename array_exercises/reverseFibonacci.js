function fibonacci(n) {
    const fibonacciSeries = [];
    if (n === 1) fibonacciSeries.push(0);
    if (n === 2) fibonacciSeries.splice(0, 0, 1, 0);
    if (n > 2) {
        fibonacciSeries.splice(0, 0, 1, 0);
        for (let i = 2; i < n; i++) {
            fibonacciSeries.unshift(fibonacciSeries[0] + fibonacciSeries[1])
        }
    }
    return fibonacciSeries;
}

console.log(fibonacci(5));
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
