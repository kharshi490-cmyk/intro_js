function type(x) {
    if (Array.isArray(x)) return 'array';
    return typeof x;
}

function isEqual(x, y) {
    // if (x === y) return true;
    if (typeof (x) === 'object' && typeof (y) === 'object') {
        if (x.length !== y.length) return false;
        const x_entries = Object.entries(x);
        const y_entries = Object.entries(y);

        // if (x_entries.length !== y_entries.length) return false;
        // for (const key in x) {
        //     const isPresent = (key in y) && isEqual(x[key], y[key]);
        //     if (!isPresent) return false;
        // }
        // return true;
        for (let row = 0; row < x_entries.length; row++) {
            for (let col = 0; col < x_entries[0].length; col++) {
                if (!(isEqual(x_entries[row][col], y_entries[row][col]))) return false;
            }
        }
    } else if (x !== y) return false;
    return true;
}


// const testCase = isEqual(1, 1); // true
// const testCase = isEqual("a", "a"); // true
// const testCase = isEqual([], []); // true
// const testCase = isEqual([1], [1]); // true
// const testCase = isEqual([1], [1, 2]); // false
// const testCase = isEqual(1, "1"); // false
// const testCase = isEqual({ a: 1 }, { a: 1 }); // true
// const testCase = isEqual({ a: 1 }, { b: 1 }); // false
// const testCase = isEqual({ a: [1] }, { a: [1] }); // true
const testCase = isEqual({ a: { b: 1 } }, { a: { b: 1 } }); // true

console.log(testCase);