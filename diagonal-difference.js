function diagonalDifference(arr) {
    let lfDiagonal = 0;
    let rlDiagonal = 0;
    let size = arr.length;

    for (let i = 0; size > i; i += 1) {
        const row = arr[i];
        lfDiagonal += row[i];
        rlDiagonal += row[size - 1 - i];
    }

    return Math.abs(lfDiagonal - rlDiagonal);
}
