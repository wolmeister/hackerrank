function plusMinus(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for (const value of arr) {
        if (value === 0) {
            zeroCount += 1;
        } else if (value > 0) {
            positiveCount += 1;
        } else {
            negativeCount += 1;
        }
    }
    const positiveRatio =(positiveCount / arr.length).toFixed(6);
    const negativeRatio =(negativeCount / arr.length).toFixed(6);
    const zeroRatio =(zeroCount / arr.length).toFixed(6);

    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
}
