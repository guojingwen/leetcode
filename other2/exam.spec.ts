import { expect, test } from 'vitest';
import { hello } from './exam.ts';

test('solution', () => {
  expect(hello()).toEqual('world');
});
