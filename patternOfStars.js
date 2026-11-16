function lineOfStars(number) {
    if (number === 0) return "";
    return "*" + lineOfStars(number - 1);
}

function pattern(number) {
    if (number === 0) return "";
    return pattern(number - 1) + lineOfStars(number) + "\n";
}

function reversePattern(number) {
    if (number === 0) return "";
    return lineOfStars(number) + "\n" + reversePattern(number - 1);
}

function finalPattern(number) {
    if (number === 0) return "";
    const inc = pattern(number);
    const dec = reversePattern(number - 1);
    return inc + dec;
}

console.log(finalPattern(3));
console.log(finalPattern(4));
console.log(finalPattern(5));
console.log(finalPattern(0));
