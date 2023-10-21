import { expect, test } from 'vitest';
import { twoSum } from '../ts/1.twosum';

test('x', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
