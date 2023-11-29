function searchInsert(nums: number[], target: number): number {
  if (!nums.length) {
    // nums.push(target);
    return 0;
  }
  const result = findInsert(0, nums.length - 1);
  console.log(result);
  return result;
  function findInsert(left: number, right: number) {
    if (target === nums[left]) {
      return left;
    }
    if (target < nums[left]) {
      return left;
    }
    if (target === nums[right]) {
      return right;
    }
    if (target > nums[right]) {
      return right + 1;
    }
    const middle = (left + right) >> 1;
    const middleVal = nums[middle];
    if (middleVal === target) {
      return middle;
    }
    if (middleVal < target) {
      return findInsert(middle + 1, right - 1);
    }
    return findInsert(left + 1, middle - 1);
  }
}
