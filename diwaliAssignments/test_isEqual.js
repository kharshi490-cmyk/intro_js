const { isEqual } = require("./isEqual.js");

const testData = [
    {
        title: "Number Equality",
        x: 1,
        y: 1,
        Expected: true,
    },
    {
        title: "String Equality",
        x: "abc",
        y: "abc",
        Expected: true,
    },
    {
        title: "Empty Array Equality",
        x: [],
        y: [],
        Expected: true,
    },
    {
        title: "Array Equality",
        x: [1, 2],
        y: [1, 2],
        Expected: true,
    },
    {
        title: "arrayInArray Equality",
        x: [1, [2, 3]],
        y: [1, [2, 3]],
        Expected: true,
    },
    {
        title: "objectInArray Equality",
        x: [1, { a: 12, b: { c: 2 } }],
        y: [1, { a: 12, b: { c: 2 } }],
        Expected: true,
    },
    {
        title: "Object Equality",
        x: { a: 1, b: 2 },
        y: { a: 1, b: 2 },
        Expected: true,
    },
    {
        title: "objectInArray Equality",
        x: { a: 1, b: [1, 2, 3, 4] },
        y: { a: 1, b: [1, 2, 3, 4] },
        Expected: true,
    },
    {
        title: "object Equality",
        x: { a: 1 },
        y: { b: 1 },
        Expected: false,
    },
    {
        title: "object Equality",
        x: { a: 1 },
        y: { a: 2 },
        Expected: false,
    },
    {
        title: "array Equality",
        x: [1, [12, 2], 2],
        y: [1, [12, 2], 3],
        Expected: false,
    },
    {
        title: "If input is null",
        x: null,
        y: null,
        Expected: true,
    },
]

for (const testCase of testData) {
    const icon = isEqual(testCase.x, testCase.y) === testCase.Expected ? "✅" : "❌";
    console.log(icon, testCase.title);
}