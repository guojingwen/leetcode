export function threeSumClosest(nums: number[], target: number): number {
  if (nums.length <= 3) {
    return nums.reduce((sum, it) => sum + it, 0);
  }
  nums.sort((a, b) => a - b);
  let closedNum: number;
  let closedNumAbs: number = Number.MAX_VALUE;
  for (let i = 0; i < nums.length - 2; i++) {
    const first = nums[i];
    const _nums = nums.slice();
    _nums.splice(i, 1);
    let startIndex = 0,
      endIndex = _nums.length - 1;
    while (startIndex < endIndex) {
      const sum = first + _nums[startIndex] + _nums[endIndex];
      if (Math.abs(sum - target) < closedNumAbs) {
        closedNum = sum;
        closedNumAbs = Math.abs(sum - target);
      }
      if (sum === target) {
        return closedNum!;
      } else if (sum > target) {
        endIndex--;
      } else {
        startIndex++;
      }
    }
  }
  return closedNum!;
}
