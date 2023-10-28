const rl = require('readline').createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  console.log('start');
  const [N, m] = (await readline()).split(' ').map((it) => +it) as [
    number,
    number,
  ];
  console.log(N, m);
  let count = m;
  // let id = m -count + 2;
  interface Good {
    id: number;
    v: number;
    p: number;
    q: number;
  }
  type MainGood = Good & {
    list: Array<Good>;
  };
  const goods: Array<Good> = [];
  while (count) {
    const [v, p, q] = (await readline()).split(' ').map((it) => +it) as [
      number,
      number,
      number,
    ];
    goods.push({
      id: m - count + 1,
      v,
      p,
      q,
    });
    count--;
  }
  const [mainGoods, subGoods]: [Array<MainGood>, Array<Good>] = goods.reduce(
    (sum, it) => {
      if (!it.q) {
        sum[0].push(it as MainGood);
      } else {
        sum[1].push(it);
      }
      return sum;
    },
    [[], []] as [MainGood[], Good[]]
  );
  // map  id => Good
  const map = mainGoods.reduce(
    (sum, it) => {
      sum[it.id] = it;
      return sum;
    },
    {} as { [key: number]: MainGood }
  );

  subGoods.forEach((it) => {
    map[it.q].list = map[it.q].list || [];
    map[it.q].list.push(it);
  });
  // console.log(map)
  let maxVal = 0;
  findMax(N, mainGoods, 0);
  console.log(maxVal);
  function findMax(N: number, goods: MainGood[], mVal: number) {
    maxVal = Math.max(maxVal, mVal);
    if (!goods.length) {
      return;
    }
    const first = goods[0];
    const rest = goods.slice(1);
    let restN = N - first.v;
    if (restN >= 0) {
      const _mVal = mVal + first.v * first.p;
      maxVal = Math.max(maxVal, _mVal);
      if (first.list && first.list.length) {
        findMax(restN, [...(first.list as MainGood[]), ...rest], _mVal);
      }
      findMax(restN, rest, _mVal);
    }
    findMax(N, rest, mVal);
  }
})();
