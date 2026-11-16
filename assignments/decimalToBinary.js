function decimalToBinary(value) {
    if (value === 0) {
        return "";
    }
    return decimalToBinary(Math.floor(value / 2)) + value % 2;
}

console.log(decimalToBinary(5));