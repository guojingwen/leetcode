export function solution(A: number[]): number {
  // Implement your solution here
  const diff = A.reduce((_sum, it) => {
    _sum += it;
    return _sum;
  }, 0);
  const map = new Map<number, { val: number; absVal: number }>();
  let minDiff = Infinity;
  let prevDiff = diff;
  for (let i = 1; i < A.length; i++) {
    const val = prevDiff - 2 * A[i - 1];
    const absVal = Math.abs(val);
    map.set(i, {
      val,
      absVal,
    });
    prevDiff = val;
    minDiff = Math.min(minDiff, absVal);
  }
  return minDiff;
}
// [2]

export function solution4_1(X: number, A: number[]): number {
  // Implement your solution here
  const arr = Array.from({ length: X + 1 }, () => false);
  let map = arr.reduce(
    (sum, it, index) => {
      sum[index] = false;
      return sum;
    },
    {} as { [key: number]: boolean }
  );
  const set = new Set<number>();
  arr.forEach((it, index) => {
    index && set.add(index);
  });
  for (let i = 0; i < A.length; i++) {
    const it = A[i];
    if (map[it]) continue;
    map[it] = true;
    set.delete(it);
    if (set.size === 0) {
      return i;
    }
  }
  return -1;
}

export function solution4_2(A: number[]): number {
  const map = new Map<number, boolean>();
  const set = new Set<number>();
  let maxNum = 0;
  for (let i = 0; i < A.length; i++) {
    const it = A[i];
    if (map.get(it) || it > A.length) return 0;
    map.set(it, true);
    maxNum = Math.max(maxNum, it);
  }
  for (let i = 1; i <= maxNum; i++) {
    set.add(i);
  }
  for (let i = 0; i < A.length; i++) {
    set.delete(A[i]);
    if (set.size === 0) return 1;
  }

  return 0;
}
/* 
export function solution4_3(N: number, A: number[]): number[] {
  // Implement your solution here
  const counters: number[] = Array.from({ length: N }, () => 0);
  let max = 0;
  for (const val of A) {
    if (val > N + 1) {
      // no way
      continue;
    } else if (val === N + 1) {
      for (let i = 0; i < counters.length; i++) {
        counters[i] = max;
      }
    } else {
      ++counters[val - 1];
      max = Math.max(max, counters[val - 1]);
    }
  }
  return counters;
} */
export function solution4_3(N: number, A: number[]): number[] {
  // Implement your solution here
  const counters: number[] = Array.from({ length: N }, () => 0);
  let max = 0;
  let minVal = 0;
  for (const val of A) {
    if (val > N + 1) {
      // no way
      continue;
    } else if (val === N + 1) {
      minVal = max;
    } else {
      counters[val - 1] = Math.max(minVal, counters[val - 1]) + 1;
      max = Math.max(max, counters[val - 1]);
    }
  }
  return counters.map((it) => Math.max(it, minVal));
}
/* 
export function solution4_4(A: number[]): number {
  // Implement your solution here
  const set = A.reduce((sum, it) => {
    if (it > 0) {
      sum.add(it);
    }
    return sum;
  }, new Set<number>());

  const newA = [...set].sort((a, b) => a - b);
  let minVal = 1;
  if (!newA.length) return minVal;
  if (newA[0] > 1) return minVal;
  for (let it of newA) {
    if (it === minVal + 1) {
      minVal = it;
    } else if (it === minVal) {
      continue;
    } else if (it > minVal + 1) {
      // 只剩下这一种情况了
      break;
    }
  }
  return minVal + 1;
} */

export function solution4_4(A: number[]): number {
  // Implement your solution here
  const set = A.reduce((sum, it) => {
    if (it > 0) {
      sum.add(it);
    }
    return sum;
  }, new Set<number>());

  const newA = [...set].sort((a, b) => a - b);
  const minVal = 1;
  if (!newA.length) return minVal;
  if (newA[0] > 1) return minVal;
  let leftInd = 0;
  let rightInd = newA.length - 1;
  while (leftInd < rightInd - 1) {
    const midIndex = (leftInd + rightInd) >> 1;
    const val = midIndex + 1;
    if (newA[midIndex] > val) {
      rightInd = midIndex;
    } else if (newA[midIndex] == val) {
      leftInd = midIndex;
    } else {
      throw new Error('no');
    }
  }
  if (newA[rightInd] === rightInd + 1) {
    return rightInd + 2;
  } else {
    return newA[rightInd - 1] + 1;
  }
}

export function solution5_1(A: number[]): number {
  // Implement your solution here
  let dir = 0;
  let count = 0;
  let dirNum = 0;
  for (let i = 0; i < A.length; i++) {
    const it = A[i];
    if (it === dir) {
      ++dirNum;
    } else {
      count += dirNum;
      if (count > 1000000000) {
        return -1;
      }
    }
  }

  /* for (let i = 0; i < A.length - 1; i++) {
    const it = A[i];
    if (it !== dir) continue;
    for (let j = i + 1; j < A.length; j++) {
      if (A[j] === dir) continue;
      ++count;
      if (count > 1000000000) {
        return -1;
      }
    }
  } */
  return count;
}

export function solution6_1(A: number[]): number {
  // Implement your solution here
  const set = A.reduce((set, it) => {
    set.add(it);
    return set;
  }, new Set<number>());
  return set.size;
}
/* 
export function solution6_4(A: number[]): number {
  // Implement your solution here
  if (A.length < 2) return 0;
  const map = A.reduce((sum, radio, index) => {
    sum.set(index, [Math.max(index - radio, 0), index + radio]);
    return sum;
  }, new Map<number, [number, number]>());

  let count = 0;
  for (let i = 0; i < A.length - 1; i++) {
    const [, end] = map.get(i)!;
    for (let j = i + 1; j < A.length; j++) {
      const [startJ] = map.get(j)!;
      if (end >= startJ) {
        ++count;
      }
    }
  }
  return count;
} */

export function solution6_4(A: number[]): number {
  const size: number = A.length;
  if (size < 2) return 0;

  const begin: number[] = [];
  const end: number[] = [];

  for (let i = 0; i < size; i++) {
    begin.push(i - A[i]);
    end.push(i + A[i]);
  }

  begin.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let res: number = 0;
  let upperIndex: number = 0;
  let lowerIndex: number = 0;

  for (upperIndex = 0; upperIndex < size; upperIndex++) {
    while (
      lowerIndex < size &&
      begin[lowerIndex] <= end[upperIndex]
    ) {
      lowerIndex++;
    }
    res += lowerIndex - upperIndex - 1;
    if (res > 10000000) return -1;
  }

  return res;
}
