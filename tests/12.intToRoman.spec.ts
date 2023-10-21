import { expect, test } from 'vitest';
import { intToRoman } from '../ts/12.intToRoman';

test('整数转罗马数字', () => {
  expect(intToRoman(1994)).toEqual('MCMXCIV');
});
