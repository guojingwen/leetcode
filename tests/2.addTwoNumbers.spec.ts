import { expect, test } from 'vitest';
import { addTwoNumbers, createLink } from '../ts/2.addTwoNumbers';

test('addTwoNumbers', () => {
  expect(addTwoNumbers(createLink([2, 4, 3]), createLink([5, 6, 4]))).toEqual(
    createLink([7, 0, 8])
  );
  expect(addTwoNumbers(createLink([9, 9, 9, 9, 9, 9, 9]), createLink([9, 9, 9, 9]))).toEqual(
    createLink([8, 9, 9, 9, 0, 0, 0, 1])
  );
});
