function describeNumber(number) {
    if (number === 0) {
        return "Zero";
    }
    if (number < 0) {
        return "Negative";
    }
    return "Positive";
}

console.log(describeNumber(43));
console.log(describeNumber(-73));
console.log(describeNumber(0));
