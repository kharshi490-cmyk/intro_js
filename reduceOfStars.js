function lineOfStars(number) {
    if (number === 0) return "";
    return "*" + lineOfStars(number - 1);
}

function pattern(inc, dec) {
    if (inc === 0 || dec === 0) return "";
    return inc === dec
        ? pattern(inc - 1, dec - 1) + lineOfStars(inc) + "\n"
        : lineOfStars(dec) + "\n" + pattern(inc - 1, dec - 1);
}

// function reversePattern(number) {
//     if (number === 0) return "";
//     return lineOfStars(number) + "\n" + reversePattern(number - 1);
// }

function finalPattern(number) {
    if (number === 0) return "";
    const inc = pattern(number, number);
    const dec = pattern(number, number - 1);
    return inc + dec;
}

console.log(finalPattern(3));
// console.log(finalPattern(4));
// console.log(finalPattern(5));
// console.log(finalPattern(0));
