import { describe, test, expect } from 'vitest';
import {
  binarySearch,
  interpolationSearch,
  search,
} from '../ts_algorithm/search';

describe('search', () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20,
  ];
  test('binarySearch', () => {
    expect(binarySearch(arr, 1)).equal(0);
  });
  test('interpolationSearch', () => {
    expect(interpolationSearch(arr, 1)).equal(0);
  });
  test('leetcode33 搜索旋转排序数组', () => {
    const list = [4, 5, 6, 7, 0, 1, 2];
    expect(search(list, 5)).toEqual(1);
  });
});
