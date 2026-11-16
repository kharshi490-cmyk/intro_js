function nestedParentheses (number) {
    if (number === 0) {
        return "";
    }
    return "(" + nestedParentheses(number - 1) + ")";
}
console.log(`"${nestedParentheses(3)}"`);
console.log(`"${nestedParentheses(0)}"`);
console.log(`"${nestedParentheses(5)}"`);
console.log(`"${nestedParentheses(1)}"`);