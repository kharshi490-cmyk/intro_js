function fibonacciTerm(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacciTerm(n - 1) + fibonacciTerm(n - 2);
}

console.log(fibonacciTerm(6));