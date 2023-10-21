import { expect, test } from 'vitest';
import { reverseKGroup, createListNode } from '../ts/25.reverseKGroup2';

var l1 = createListNode([1, 2, 3, 4, 5]);
var l2 = createListNode([2, 1, 4, 3, 5]);
test('x', () => {
  expect(reverseKGroup(l1, 2)).toEqual(l2);
});
