import { expect, test } from 'vitest';
import { search } from '../ts/33.search';

test('x', () => {
  // expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
  // expect(search([4, 5, 6, 7, 0, 1, 2], 1)).toEqual(5);
  expect(search([4, 5, 6, 7, 0, 1, 2], 5)).toEqual(1);
  expect(search([8, 1, 2, 3, 4, 5, 6, 7], 6)).toEqual(6);
});
