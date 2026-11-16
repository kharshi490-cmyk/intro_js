function isDifAbove(neighour, intensity, threshold) {
    return neighour - intensity > threshold;
}

function isEdge(bitmap, row, col, threshold) {
    const rightNeighour = bitmap[row][col + 1];
    const downNeighour = bitmap[row + 1] ? bitmap[row + 1][col] : undefined;
    const intensity = bitmap[row][col];

    return (rightNeighour && isDifAbove(rightNeighour, intensity, threshold) ||
        downNeighour && isDifAbove(downNeighour, intensity, threshold));
}

function edge(bitmap, threshold) {
    const edgeMap = [];
    for (let row = 0; row < bitmap.length; row++) {
        const edgeRow = [];
        for (let col = 0; col < bitmap[row].length; col++) {
            if (isEdge(bitmap, row, col, threshold))
                edgeRow.push(0);
            else
                edgeRow.push(bitmap[row][col]);
        }
        edgeMap.push(edgeRow);
    }
    return edgeMap;
}

const bitmap = [
    [20, 20, 20, 220, 220],
    [20, 20, 20, 20, 220],
    [20, 20, 220, 220, 220],
    [20, 20, 20, 220, 220],
];

console.log(edge(bitmap, 100));