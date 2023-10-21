import { expect, test } from 'vitest';
import { findSubstring } from '../ts/30.findSubstring2';

test('x', () => {
  var s = 'barfoothefoobarman',
    words = ['foo', 'bar'];
  // expect(findSubstring(s, words)).toEqual([0, 9]);
  expect(
    findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'good'])
  ).toEqual([8]);
});
