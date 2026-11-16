function isZero (number) {
    return number === 0;
}

function isNonzero (number) {
    return !isZero(number);
}
console.log(isNonzero(0));
console.log(isNonzero(20));
console.log(isNonzero(-40));
console.log(isNonzero(3230));
console.log(isNonzero(-6570));
