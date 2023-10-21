import { expect, test } from 'vitest';
import { maxArea } from '../ts/11.maxArea';

test('盛最多水的容器', () => {
  const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
  console.log(result);
  expect(result).toEqual(49);
});
//  0 1 2 3 4 5 6 7 8
// [1,8,6,2,5,4,8,3,7]
//  -               -  8
