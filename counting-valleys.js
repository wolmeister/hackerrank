function countingValleys(steps, path) {
    let level = 0;
    let valleys = 0;

    for (let i = 0; i < steps; i +=1) {
        if (path[i] === 'U') {
            level += 1;
        } else {
            if (level === 0) {
                valleys += 1;
            }
            level -= 1;
        }
    }

    return valleys;
}
