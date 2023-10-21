import { expect, test } from 'vitest';
import { myAtoi } from '../ts/8.stringToInt';

test('x', () => {
  // expect(myAtoi('words and 987')).toEqual(0);
  expect(myAtoi('+-12')).toEqual(0);
  expect(myAtoi('')).toEqual(0);
});
