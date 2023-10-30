import { describe, test, expect, beforeEach } from 'vitest';
import {
  bubbleSort,
  selectSort,
  insertSort,
  mergeSort,
  quickSort,
  quickSort2,
  countingSort,
  bucketSort,
  heapSort,
  radixSort,
} from '../ts_algorithm/sort';

describe('test 排序算法', () => {
  let arr: number[];
  beforeEach(() => {
    arr = [6, 5, 8, 7, 2, 0, 3, 1, 4, 9];
  });
  test('冒泡排序', () => {
    expect(bubbleSort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('选择排序', () => {
    expect(selectSort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('插入排序', () => {
    expect(insertSort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('归并排序', () => {
    expect(mergeSort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('快速排序', () => {
    expect(quickSort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('快速排序-空间复杂度优化', () => {
    expect(quickSort2(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('计数排序', () => {
    expect(countingSort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('桶排序', () => {
    expect(bucketSort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('堆排序', () => {
    expect(heapSort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('基数排序', () => {
    expect(radixSort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
