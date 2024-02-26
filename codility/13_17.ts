export function solution_dp1(A: number[]): number {
  let dp = [A[0]];
  const arr = [A[0]];
  for (let i = 1; i < A.length; i++) {
    const max = findMax(arr);
    dp[i] = max + A[i];
    if (arr.length === 6) {
      arr.shift();
    }
    arr.push(dp[i]);
  }
  return dp[dp.length - 1];
}

function findMax(arr: number[]) {
  return Math.max(...arr);
}
export function solution16_1(A: number[], B: number[]): number {
  if (A.length === 0) {
    return 0;
  }

  let count: number = 0; //2
  let end: number = B[0]; // 5 7  9

  for (let i = 1; i < A.length; i++) {
    if (end < A[i]) {
      //i:4  9
      count++;
      end = B[i]; //
    }
  }

  return count + 1;
}

export function solution16_2(K: number, A: number[]): number {
  // Implement your solution here
  let count = 0;
  let segs = 0;
  for (let i = 1; i < A.length; i++) {
    segs = A[i] + segs;
    if (segs >= K) {
      count++;
      segs = 0;
    }
  }
  return count;
}

/* export function solution16_3(M: number, A: number[]): number {
  // Implement your solution here
  const { sum, last } = A.reduce(
    (sum, it) => {
      if (sum.last.includes(it)) {
        sum.sum.push(sum.last);
        sum.last = [it];
      } else {
        sum.last.push(it);
      }
      return sum;
    },
    {
      sum: [] as number[][],
      last: [] as number[],
    }
  );
  if (last.length) {
    sum.push(last);
  }

  return sum.reduce((_sum, it) => {
    _sum += fibounicca(it.length);
    return _sum;
  }, 0);
}

const cache = { '0': 1, '1': 1 } as { [key: number]: number };
let index = 1;
function fibounicca(n: number): number {
  if (cache[n]) return cache[n];
  for (let i = index + 1; i <= n; i++) {
    cache[i] = i + cache[i - 1];
  }
  index = Math.max(index, n);
  return cache[n];
} */

function computer(start: number, end: number): number {
  return ((end - start + 1) * (end - start)) / 2;
}

export function solution16_3(M: number, A: number[]): number {
  let sumTimes: number = A.length; // Count of each individual element as a slice
  let existed: Record<number, number> = {};
  let start: number = 0; // Starting index for counting distinct slices
  let end: number = 0;

  for (let index = 0; index < A.length; index++) {
    const value = A[index];
    end = index;
    if (existed.hasOwnProperty(value)) {
      if (existed[value] >= start) {
        sumTimes += computer(start, index - 1);
        sumTimes -= computer(existed[value] + 1, index - 1); // Subtract overlap
        start = existed[value] + 1; // Update start index
        if (sumTimes >= 1e9) {
          return 1000000000;
        }
      }
    }
    existed[value] = index;
  }

  sumTimes += computer(start, end);
  return Math.min(sumTimes, 1000000000);
}

export function solution15_4(A: number[]): number {
  // Implement your solution here
  A.sort((a, b) => a - b);
  let absDiff = Infinity;
  let leftIndex = 0;
  let rightIndex = A.length - 1;
  while (leftIndex <= rightIndex) {
    const _diff = A[leftIndex] + A[rightIndex];
    absDiff = Math.min(absDiff, Math.abs(_diff));
    if (_diff === 0) {
      return 0;
    }
    if (_diff > 0) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }
  return absDiff;
}

export function solution14_1(
  K: number,
  M: number,
  A: number[]
): number {
  const sumNum = A.reduce((sum, it) => sum + it, 0);
  if (A.length === 1 || K === 1) return sumNum;
  let maxNum = Math.max(...A);
  if (A.length <= K) return maxNum;
  // maxSum  is between maxNum and sum
  let sumNumTemp = sumNum;
  while (maxNum <= sumNumTemp) {
    let middle = maxNum + Math.floor((sumNumTemp - maxNum) / 2);
    const blocksCount = getDivied(A, middle);
    if (K >= blocksCount) {
      sumNumTemp = middle - 1;
    } else {
      maxNum = middle + 1;
    }
  }
  return maxNum;
}

function getDivied(A: number[], maxSum: number) {
  let size = 1;
  let sum = 0;
  A.forEach((it) => {
    sum += it;
    if (sum > maxSum) {
      sum = it;
      size++;
    }
  });
  return size;
}

// 1 1 2 3 5 8 青蛙斐波那契跳
function fibouncci(num: number) {
  const mycaches = [1, 1];
  let max = mycaches[mycaches.length - 1];
  while (max < num) {
    const i = mycaches.length;
    max = mycaches[i - 1] + mycaches[i - 2];
    mycaches.push(max);
  }
  mycaches.pop();
  mycaches.shift();
  return mycaches;
}
/* export function solution13_1(A: number[]): number {
  // Implement your solution here
  let start = -1;
  const end = A.length;
  let count = 0;
  fibouncci(A.length + 1);
  while (start < end) {
    const diff = end - start;
    // 性能优化
    for (let i = mycaches.length - 1; i >= 0; i--) {
      if (mycaches[i] <= diff) {
        break;
      }
      mycaches.pop();
    }
    // 计算
    let index = mycaches.length - 1;
    if (start + mycaches[index] === end) {
      return count + 1;
    }
    while (index) {
      if (A[start + mycaches[index]]) {
        start += mycaches[index];
        count++;
        break;
      }
      index--;
    }
    if (!index) return -1;
  }
  return -1;
} */

export function solution13_1(A: number[]): number {
  A = [1, ...A, 1]; // 添加开始的位置-1，以及结束的位置N
  const length: number = A.length;
  const fibList: number[] = fibouncci(length);

  if (fibList.includes(length - 1)) {
    // 一次就可从位置-1跳到位置N
    return 1;
  }
  // 参照序列
  const signList = Array.from({ length }, () => length);
  signList[0] = 0;

  for (let i = 1; i < length; i++) {
    // 此处有树叶
    if (A[i] === 1) {
      // 遍历斐波那契数列, 寻找最少的跳跃次数
      const j = fibList.find((it) => i - it === 0);
      if (j) {
        // 说明dis位置可以斐波那契到达的;
        signList[i] = Math.min(signList[i - j] + 1, signList[i]);
      }
    }
  }

  return signList[length - 1] < length ? signList[length - 1] : -1;
}
