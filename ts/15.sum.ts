export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  if (nums.length < 3) return [];
  if (nums[0] > 0) return [];
  if (nums[nums.length - 1] < 0) return [];
  const result: [number, number, number][] = [];
  const cache: { [k: string]: any } = {};
  for (let i = 0; i < nums.length - 2; i++) {
    const first = nums[i];
    const _nums = nums.slice();
    _nums.splice(i, 1);
    let startIndex = 0,
      endIndex = _nums.length - 1;
    while (startIndex < endIndex) {
      const sum = first + _nums[startIndex] + _nums[endIndex];
      if (sum === 0) {
        const item = [first, _nums[startIndex], _nums[endIndex]].sort(
          (a, b) => a - b
        ) as [number, number, number];
        const key = item.join('_');
        if (!cache[key]) {
          cache[key] = true;
          result.push(item);
        }
        startIndex++;
        endIndex--;
        continue;
      } else if (sum > 0) {
        endIndex--;
      } else {
        startIndex++;
      }
    }
  }
  return result;
}
