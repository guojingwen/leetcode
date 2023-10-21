import { expect, test } from 'vitest';
import { Stack } from '../ts_data/stack';

test('Stack', () => {
  const stack = new Stack<string>();
  stack.push('a');
  stack.push('b');
  expect(stack.size).toEqual(2);
  expect(stack.pop()).toEqual('b');
  expect(stack.peek()).toEqual('a');
  expect(stack.size).toEqual(1);
  const it = stack.pop();
  expect(stack.size).toEqual(0);
});
