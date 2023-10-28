const str1 = 'acecd';
const str2 = 'acded';
console.log(getMaxCommonSeq(str1, str2));

function getMaxCommonSeq(str1: string, str2: string) {
  const dp = Array.from({ length: str1.length + 1 }, () =>
    Array.from(
      {
        length: str2.length + 1,
      },
      () => 0
    )
  );
  let maxLen = 0;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = Math.max(dp[i][j - 1], 1 + dp[i - 1][j - 1]);
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
      maxLen = Math.max(maxLen, dp[i][j]);
    }
  }
  return maxLen;
}
