import { expect, test } from 'vitest';
import { threeSum } from '../ts/15.sum';

test('15. 三数之和', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});
