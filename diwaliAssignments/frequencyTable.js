function countItems(array) {
    const itemsCount = {};
    for (const ele of array) {
        if (itemsCount[ele] === undefined) {
            itemsCount[ele] = 1;
        } else {
            itemsCount[ele]++;
        }
    }
    return itemsCount;
}

const testArray = ["apple", "banana", "apple", "apple", "orange", "banana"];
// const testArray = ["1", 1, "apple", "1"];
console.log(countItems(testArray));