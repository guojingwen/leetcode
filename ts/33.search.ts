// [0, 1, 2, 4, 5, 6, 7] target: 3
// [4, 5, 6, 7, 0, 1, 2]
// 4,5,6,7,8,1,2,3
export function search(nums: number[], target: number): number {
  return searchHelper(0, nums.length - 1);
  function searchHelper(left, right): number {
    if (left > right) {
      return -1;
    }
    let middle = Math.floor(left + (right - left) / 2);
    let middleVal = nums[middle];
    let leftValue = nums[left];
    let rightValue = nums[right];
    if (leftValue === target) {
      return left;
    }
    if (rightValue === target) {
      return right;
    }
    if (middleVal === target) {
      return middle;
    }
    if (leftValue < middleVal) {
      // 有序
      if (target > leftValue && target < middleVal) {
        return searchHelper(left + 1, right - 1);
      } else {
        return searchHelper(middle + 1, right - 1);
      }
    } else {
      if (target > middleVal && target < rightValue) {
        return searchHelper(middle + 1, right - 1);
      } else {
        return searchHelper(left + 1, middle - 1);
      }
    }
  }
}
