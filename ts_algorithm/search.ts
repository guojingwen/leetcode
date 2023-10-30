import { expect } from 'vitest';

export function binarySearch(arr: number[], target: number) {
  if (arr.length < 1) return -1;
  if (arr[0] > target && arr.at(-1)! < target) return -1;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    // console.log(Date.now());
    const middle = left + ((right - left) >> 1);
    if (arr[middle] === target) {
      return middle;
    }
    if (arr[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

export function interpolationSearch(arr: number[], target: number) {
  if (arr.length < 1) return -1;
  if (arr[0] > target && arr.at(-1)! < target) return -1;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    console.log(Date.now());
    const middle =
      left +
      ((target - arr[left]) / (arr[right] - arr[left])) *
        (right - left);
    if (arr[middle] === target) {
      return middle;
    }
    if (arr[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

export function search(nums: number[], target: number): number {
  return searchHandler(0, nums.length - 1);

  function searchHandler(left: number, right: number): number {
    if (left > right) return -1;
    if (left === right) return nums[left] === target ? left : -1;
    let middle = (left + right) >> 1;
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;
    if (nums[middle] === target) return middle;
    if (nums[left] < nums[middle]) {
      // 左边有序
      if (target > nums[left] && target < nums[middle]) {
        return searchHandler(left + 1, middle - 1);
      } else {
        return searchHandler(middle + 1, right - 1);
      }
    } else {
      // 右侧有序
      if (target > nums[middle] && target < nums[right]) {
        return searchHandler(middle + 1, right - 1);
      } else {
        return searchHandler(left + 1, middle - 1);
      }
    }
  }
}
