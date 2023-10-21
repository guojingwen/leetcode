import { expect, test } from 'vitest';
import { threeSumClosest } from '../ts/16.threeSumClosest2';

test('最接近的三数之和', () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toEqual(2);
});
