function type(x) {
    if (Array.isArray(x)) return 'array';
    if (Number.isNaN(x)) return 'NaN';
    if (x === null) return 'null';
    return typeof x;
}

function areValuesEqual(x, y) {
    return x === y;
}

function areArraysEqual(x, y) {
    if (Object.keys(x).length !== Object.keys(y).length) return false;

    for (const key in x) {
        if (!(key in y)) return false;
        if (!isEqual(x[key], y[key])) return false;
    }
    return true;
}

function isEqual(x, y) {
    if (type(x) !== type(y)) return false;
    if (x === y) return true;
    switch (type(x)) {
        case 'array': return areArraysEqual(x, y);
        case 'object': return areArraysEqual(x, y);
        case 'NaN': return true;
    }
    return false;
    // return areValuesEqual(x, y);
}

// function isEqual(x, y) {
//     if (type(x) !== type(y)) return false;
//     if (type(x) !== 'object' && type(x) !== 'array') return x === y;

//     if (Object.keys(x).length !== Object.keys(y).length) return false;

//     for (const key in x) {
//         const isPresent = (key in y) && isEqual(x[key], y[key]);
//         if (!isPresent) return false;
//     }
//     return true;
// }

function test(message, expected, x, y) {
    const actual = isEqual(x, y);
    const isPassed = actual === expected ? "✅" : "❌";
    console.log(`${isPassed} ${message}`);
}

function testBoolean() {
    test("Both true's are equal", true, true, true);
    test("Both false's are equal", true, false, false);
    test("true & false are unequal", false, true, false);
    test("Number & Boolean are unequal", false, 1, true);
    test("String & Boolean are unequal", false, "true", true);
    test("Array & Boolean are unequal", false, [], true);
    test("Object & Boolean are unequal", false, {}, true);
}

function testNumber() {
    test("Both same numbers are equal", true, 5, 5);
    test("Both diff numbers are unequal", false, 1, 5);
    test("Number & String are unequal", false, 5, "5");
    test("Number & Array are unequal", false, 5, [1]);
    test("Number & Object are unequal", false, 5, {});
}

function testArray() {
    test("Both empty arrays are equal", true, [], []);
    test("Both non-empty arrays are equal", true, [1, 2], [1, 2]);
    test("Both nested arrays are equal", true, [1, [2]], [1, [2]]);
    test("arrays of diff lengths are unequal", false, [1], [1, 2]);
    test("diff values in arrays of same lengths are unequal", false, [1, 3], [1, 2]);
    test("Array & Object are unequal", false, [1], { 0: 1 });
}

function testObject() {
    test("Both empty objects are equal", true, {}, {});
    test("Both non-empty objects are equal", true, { a: 1 }, { a: 1 });
    test("Both nested objects are equal", true, { a: 2, b: { c: 1 } }, { a: 2, b: { c: 1 } });
    test("objects of diff lengths are unequal", false, {}, { a: 1 });
    test("diff values in objects of same lengths are unequal", false, { a: 1 }, { a: 2 });
    test("diff keys in objects of same lengths are unequal", false, { a: 1 }, { b: 1 });
}

function testNullUndefinedNaN() {
    test("Both null's are equal", true, null, null);
    test("Both undefined's are equal", true, undefined, undefined);
    test("Both NaN's are equal", true, NaN, NaN);
}

testBoolean();
testNumber();
testArray();
testObject();
testNullUndefinedNaN();

module.exports = {
    isEqual,
}


