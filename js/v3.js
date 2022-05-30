var a = maxUp([2, 5, 1, 3, 4, 8]);
console.log(a);
function maxUp(arr) {
    if (!arr.length)
        return 0;
    let max = 0;
    const dp = [];
    dp[0] = 1;
    for (let i = 1; i < arr.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
        max = Math.max(dp[i], max);
    }
    console.log(dp);
    return max;
}
