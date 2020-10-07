function birthdayCakeCandles(candles) {
    let tallest = 0;
    let count = 0;

    for (const value of candles) {
        if (value > tallest) {
            tallest = value;
            count = 1;
        } else if (value === tallest) {
            count += 1;
        }
    }

    return count;
}
