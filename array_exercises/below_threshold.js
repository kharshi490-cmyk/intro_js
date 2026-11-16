function filterBelow(array, threshold) {
    const belowThreshold = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < threshold) belowThreshold.push(array[i]);
    }
    return belowThreshold;
}

console.log(filterBelow([6, 2, 3, 1, 4, 7], 3));
console.log(filterBelow([1, 2, 3], 0));
