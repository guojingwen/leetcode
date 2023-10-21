import { expect, test } from 'vitest';
import { MyStack } from '../ts/225.stackCreateByQueue';

test('225.用队列实现栈', () => {
  const stack = new MyStack<number>();
  // ["MyStack","push","push","push","top","pop","top","pop","top","empty","pop","empty"]
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.top()).equal(3);
  expect(stack.pop()).equal(3);
  expect(stack.top()).equal(2);
  expect(stack.pop()).equal(2);
  expect(stack.top()).equal(1);
  expect(stack.empty()).equal(false);
  expect(stack.pop()).equal(1);
  expect(stack.empty()).equal(true);
});
