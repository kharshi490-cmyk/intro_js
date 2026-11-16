function compoundInterest(P, R, T) {
    return (P * (1 + R / 100) ** T) - P;
}

console.log(compoundInterest(1000, 10, 2));