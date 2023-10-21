export function twoSum(nums: number[], target: number): number[] {
  const map = nums.reduce((sum, it, index) => {
    sum[it] ??= [];
    sum[it].push(index);
    return sum;
  }, {});

  const newNums = nums.sort((a, b) => a - b);
  let start = 0,
    end = newNums.length - 1;
  for (;;) {
    const one = newNums[start];
    const second = newNums[end];
    const sum = one + second;
    if (sum === target) {
      if (one === second) {
        return map[one];
      }
      return [map[one][0], map[second][0]];
    }
    if (start >= end) return [];
    if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
}
