function isLong (word) {
    return word.length > 5;
}
console.log(isLong("Hello"));
console.log(isLong("Hi"));
console.log(isLong("harshitha"));


function describeWord (word) {
    return word.length ? "Non-Empty" : "Empty";
}
console.log(describeWord(""));
console.log(describeWord("Hello"));
console.log(describeWord("Hello zajgd"));