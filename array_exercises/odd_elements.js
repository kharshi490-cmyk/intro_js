function selectOdds(numbers) {
    const oddElements = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) oddElements.push(numbers[i]);
    }
    return oddElements;
}

console.log(selectOdds([3, 2, 4, 5, 7]));
console.log(selectOdds([2, 4, 6]));
