function findIndex(array, element) {
    let lastIndex = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) lastIndex = i;
    }
    return lastIndex;
}

console.log(findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea"));
console.log(findIndex(["apple", "banana"], "cake"));