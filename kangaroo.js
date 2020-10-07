function kangaroo(x1, v1, x2, v2) {
    // x1 + n*v1 = x2 + n*v2
    // n = (x2-x1)/(v1-v2)
    if (x1 === x2) return 'YES';
    if (x1 > x2 && v1 > v2) return 'NO';
    if (x2 > x1 && v2 > v1) return 'NO';
    if (((x2-x1)/(v1-v2)) % 1 === 0) return 'YES';
    if (((x1-x2)/(v2-v1)) % 1 === 0) return 'YES';
    return 'NO';
}
