function printEvenWithinRange(range, number) {
    if (range < number) {
        return;
    }
    if (number % 2 === 0) {
        console.log(number);
    }
    printEvenWithinRange(range, number + 1);
}

function printEven(range) {
    printEvenWithinRange(range, 1);
}

printEven(10);