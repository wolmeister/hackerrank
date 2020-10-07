function miniMaxSum(arr) {
    const orderedArr = arr.sort();
    let minSum = 0;
    let maxSum = 0;
    for (let i = 0; arr.length - 1 > i; i += 1) {
        minSum += arr[i];
        maxSum += arr[arr.length - i - 1];
    }
    console.log(minSum + ' ' + maxSum);
}
