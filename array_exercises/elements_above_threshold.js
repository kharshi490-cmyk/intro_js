function filterAbove(array, threshold) {
    const aboveThreshold = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > threshold) aboveThreshold.push(array[i]);
    }
    return aboveThreshold;
}

console.log(filterAbove([6, 2, 3, 1, 4, 7], 3));
console.log(filterAbove([1, 2, 3], 4));
