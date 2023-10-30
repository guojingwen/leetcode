export function bubbleSort(arr: number[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    let flag = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!flag) {
      // 剪枝优化
      break;
    }
  }
  return arr;
}

export function selectSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
  return arr;
}

export function insertSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    const it = arr[i];
    // 这里可以二分查找优化
    for (let j = 0; j < i; j++) {
      if (it < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

export function mergeSort(arr: number[]) {
  if (arr.length < 2) return arr;
  const middle = arr.length >> 1;
  return merge(
    mergeSort(arr.slice(0, middle)),
    mergeSort(arr.slice(middle))
  );
  function merge(lefts: number[], rights: number[]) {
    let result: number[] = [];
    while (lefts.length && rights.length) {
      if (rights[0] < lefts[0]) {
        result.push(rights.shift()!);
      } else {
        result.push(lefts.shift()!);
      }
    }
    result.push(...lefts);
    result.push(...rights);
    return result;
  }
}

export function quickSort(arr: number[]) {
  if (arr.length < 2) return arr;
  const middle = arr.shift()!;
  const [lefts, rights] = arr.reduce(
    (sum, it) => {
      if (it < middle) {
        sum[0].push(it);
      } else {
        sum[1].push(it);
      }
      return sum;
    },
    [[], []] as [number[], number[]]
  );
  return [...quickSort(lefts), middle, ...quickSort(rights)];
}

export function quickSort2(
  arr: number[],
  left = 0,
  right = arr.length - 1
) {
  if (arr.length < 2) return arr;
  if (left < right) {
    const middle = paintion(arr, left, right);
    quickSort2(arr, left, middle - 1);
    quickSort2(arr, middle + 1, right);
  }
  return arr;
  function paintion(
    arr: number[],
    left: number,
    right: number
  ): number {
    const piovt = left;
    let index = piovt + 1;
    for (let i = index; i <= right; i++) {
      if (arr[i] < arr[piovt]) {
        [arr[index], arr[i]] = [arr[i], arr[index]];
        index++;
      }
    }
    [arr[piovt], arr[index - 1]] = [arr[index - 1], arr[piovt]];
    return index - 1;
  }
}

export function countingSort(arr: number[]) {
  if (arr.length < 2) return arr;
  const obj: { [key: number]: number } = {};
  arr.forEach((it, index) => {
    obj[it] ??= 0;
    obj[it]++;
  });
  return Object.keys(obj).reduce((sum, key) => {
    while (obj[key]) {
      sum.push(+key);
      obj[key]--;
    }
    return sum;
  }, [] as number[]);
  // const minVal = arr.reduce((sum, it) => sum > it ? it: sum);
}

export function bucketSort(arr: number[], bubbleSize = 5) {
  if (arr.length < 2) return arr;
  const [minVal, maxVal] = arr.reduce(
    (sum, it) => {
      if (it < sum[0]) {
        sum[0] = it;
      }
      if (it > sum[1]) {
        sum[1] = it;
      }
      return sum;
    },
    [arr[0], arr[0]]
  );
  const bucketCount = (maxVal - minVal) / bubbleSize + 1;
  const buckets: number[][] = Array.from(
    { length: bubbleSize },
    () => []
  );
  arr.forEach((it) => {
    const index = Math.floor((it - minVal) / bucketCount);
    buckets[index].push(it);
  });
  buckets.forEach(bubbleSort);
  return buckets.flat(1);
}

export function heapSort(arr: number[]) {
  if (arr.length < 2) return arr;
  let heapSize = arr.length;
  buildMaxHeap();
  while (heapSize > 1) {
    --heapSize;
    [arr[0], arr[heapSize]] = [arr[heapSize], arr[0]];
    heapify(0, heapSize);
  }
  return arr;
  function heapify(center: number, heapSize: number) {
    const leftIndex = 2 * center + 1;
    const rightIndex = 2 * center + 2;
    let maxIndex = center;
    if (leftIndex < heapSize && arr[maxIndex] < arr[leftIndex]) {
      maxIndex = leftIndex;
    }
    if (rightIndex < heapSize && arr[maxIndex] < arr[rightIndex]) {
      maxIndex = rightIndex;
    }
    if (maxIndex != center) {
      [arr[maxIndex], arr[center]] = [arr[center], arr[maxIndex]];
      heapify(maxIndex, heapSize);
    }
  }
  function buildMaxHeap() {
    let index = heapSize >> 1;
    for (let i = index; i >= 0; i--) {
      heapify(i, heapSize);
    }
  }
}

export function radixSort(arr: number[]) {
  if (arr.length < 2) return arr;
  const [minVal, maxVal] = arr.reduce(
    (sum, it) => {
      if (sum[0] > it) {
        sum[0] = it;
      }
      if (sum[1] < it) {
        sum[1] = it;
      }
      return sum;
    },
    [arr[0], arr[0]]
  );
  let diff = 0 - minVal;
  const len = `${maxVal + diff}`.length;
  const newArr: string[] = arr.reduce((sum, it) => {
    sum.push(`${it + diff}`.padStart(len, '0'));
    return sum;
  }, [] as string[]);
  for (let i = 0; i < len; i++) {
    newArr.sort((str1, str2) => +str1[i] - +str2[i]);
  }

  return newArr.map((str) => +str - diff);
}
