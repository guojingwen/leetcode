function searchRange(nums: number[], target: number): number[] {
  if (nums.length < 1) return [-1, -1];
  const index = binaryFind(0, nums.length - 1);
  if (index === -1) return [-1, -1];
  const result = around(index);
  return result;

  function binaryFind(left: number, right: number) {
    if (
      nums[left] > target ||
      nums[right] < target ||
      nums[left] > nums[right]
    )
      return -1;
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;
    const middle = (left + right) >> 1;
    if (nums[middle] === target) return middle;
    if (nums[middle] > target) {
      return binaryFind(left + 1, middle - 1);
    }
    return binaryFind(middle + 1, right - 1);
  }
  function around(index: number) {
    let left = index;
    for (; nums[left] === target; left--) {}

    let right = index;
    for (; nums[right] === target; right++) {}
    return [left + 1, right - 1];
  }
}

searchRange([5, 7, 7, 8, 8, 10], 8);
