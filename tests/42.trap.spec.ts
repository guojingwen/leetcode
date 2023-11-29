import { expect, test } from 'vitest';
import { trap, trap2 } from '../ts/42.trap';

test('42 trap', () => {
  expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2])).toBe(6);
  expect(trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2])).toBe(6);
});
