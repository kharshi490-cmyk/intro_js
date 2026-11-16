function type(x) {
    if (Array.isArray(x)) return 'array';
    if (x === null) return 'null';
    return typeof x;
}

function isEqual(x, y) {
    if (type(x) !== type(y)) return false;
    if (type(x) !== 'object' && type(x) !== 'array') return x === y;

    if (Object.keys(x).length !== Object.keys(y).length) return false;

    for (const key in x) {
        const isPresent = (key in y) && isEqual(x[key], y[key]);
        if (!isPresent) return false;
    }
    return true;
}


module.exports = {
    isEqual,
}
