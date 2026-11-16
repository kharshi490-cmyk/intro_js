function fibonacciTerm(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacciTerm(n - 1) + fibonacciTerm(n - 2);
}

function printTerm(range, n) {
    if (range === n) {
        return;
    }
    console.log(fibonacciTerm(n));
    printTerm(range, n + 1);
}

function printSeries(range) {
    printTerm(range, 0);
}

printSeries(7);