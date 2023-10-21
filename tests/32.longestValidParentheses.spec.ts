import { expect, test } from 'vitest';
import { longestValidParentheses } from '../ts/32.longestValidParentheses';

test('32. 最长有效括号', () => {
  expect(longestValidParentheses(')()())')).toEqual(4);
  expect(longestValidParentheses('()(()')).toEqual(2);
  expect(longestValidParentheses('(()())')).toEqual(6);
});
