// 集合覆盖问题
/**
 * 
假设存在下面需要付费的广播台，以及广播台信息可以覆盖的地区，
如何选择最少多少个广播台，让所有的地区都可以接收到信号
| 广播台 | 覆盖地区 |
| --- | --- |
| K1 | 北京、上海、天津 |
| K2 | 广州、北京、深圳 |
| K3 | 成都、上海、杭州 |
| K4 | 上海、天津 |
| K5 | 杭州、大连 |
 */

var map = new Map();
map.set('k1', ['北京', '上海', '天津']);
map.set('k2', ['广州', '北京', '深圳']);
map.set('k3', ['成都', '上海', '杭州']);
map.set('k4', ['上海', '天津']);
map.set('k5', ['杭州', '大连']);

console.log(getMinLeitai(map).join(', '));

function getMinLeitai(boardcasts: Map<string, Array<string>>) {
  const allAreas = new Set();
  [...boardcasts.keys()].forEach((key) => {
    boardcasts.get(key)!.forEach((item) => allAreas.add(item));
  });

  const selects: string[] = [];
  let tempArr: string[] = [];
  let maxKey: string | null = null;
  while (allAreas.size > 0) {
    maxKey = null;
    for (const item of boardcasts) {
      tempArr = item[1].filter((val) => allAreas.has(val));
      if (
        tempArr.length &&
        (maxKey === null ||
          boardcasts.get(maxKey)!.length < tempArr.length)
      ) {
        maxKey = item[0];
      }
    }
    if (maxKey !== null) {
      selects.push(maxKey);
      boardcasts.get(maxKey)!.forEach((val) => allAreas.delete(val));
    }
  }
  return selects;
}

// 最少硬币找零
function minCoinChange(coins: number[], amount: number) {
  const change: number[] = [];
  let total = 0;
  coins.sort((a, b) => b - a); // 贪心算法体现
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    while (total + coin <= amount) {
      change.push(coin);
      total += coin;
    }
  }
  return change;
}

console.log(minCoinChange([1, 2, 10, 5], 26).join(', '));
