import { expect, test } from 'vitest';
import { romanToInt } from '../ts/13.romanToInt';

test('整数转罗马数字', () => {
  expect(romanToInt('MCMXCIV')).toEqual(1994);
});
