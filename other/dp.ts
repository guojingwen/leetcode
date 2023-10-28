var map = new Map();
map.set('G', [1, 1500]);
map.set('S', [4, 3000]);
map.set('L', [3, 2000]);
console.log(getMaxValOnDiffGoods(map, 4));

function getMaxValOnDiffGoods(map: Map<string, [number, number]>, size) {
  const dp = Array.from({ length: map.size + 1 }, () =>
    Array.from({ length: size + 1 }, () => 0)
  );
  /* const path = Array.from({ length: size + 1 }, () =>
    Array.from({ length: size + 1 }, () => 0)
  );
  const goods = [...map.keys()]; */
  const [w, val] = [...map.values()].reduce(
    (sum, it) => {
      sum[0].push(it[0]);
      sum[1].push(it[1]);
      return sum;
    },
    [[], []] as [number[], number[]]
  );

  let maxVal = 0;

  console.log('start');
  // dp[i][j] 把前i个物品装入容量为j的背包
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (j < w[i - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], val[i - 1] + dp[i - 1][j - w[i - 1]]);
        maxVal = Math.max(dp[i][j], maxVal);
      }
    }
  }

  return maxVal;
}
