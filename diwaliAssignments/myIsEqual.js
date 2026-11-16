function type(x) {
    if (Array.isArray(x)) return 'array';
    return typeof x;
}

function isEqual(x, y) {
    if (type(x) !== type(y)) return false;
    if (type(x) !== 'object' && type(x) !== 'array') return x === y;

    const x_entries = Object.entries(x);
    const y_entries = Object.entries(y);

    if (x_entries.length !== y_entries.length) return false;

    for (const key in x) {
        const isPresent = (key in y) && isEqual(x[key], y[key]);
        if (!isPresent) return false
    }
    return true;
}