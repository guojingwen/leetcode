import { expect, test } from 'vitest';
import { longestPalindrome } from '../ts/5.longest';

test('longestPalindrome', () => {
  expect(longestPalindrome('abcb')).toBe('bcb');
  expect(longestPalindrome('babad')).toBe('bab');
  expect(longestPalindrome('cbbd')).toBe('bb');
  expect(longestPalindrome('abcba')).toBe('abcba');
});
