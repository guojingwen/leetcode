import { expect, test } from 'vitest';
import { nextPermutation } from '../ts/31.nextPermutation';

test('下一个排列', () => {
  var nums1 = [1, 3, 2];
  nextPermutation(nums1);
  expect(nums1).toEqual([2, 1, 3]);
  var nums2 = [2, 3, 1];
  nextPermutation(nums2);
  // console.log(nums2);
  expect(nums2).toEqual([3, 1, 2]);
});
