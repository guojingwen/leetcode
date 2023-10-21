import { expect, test } from 'vitest';
import { longestCommonPrefix } from '../ts/14.longestCommonPrefix';

test('14. 最长公共前缀', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
});
