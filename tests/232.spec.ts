import { expect, test } from 'vitest';
import { MyQueue } from '../ts/232.queueCreateByStack';

test('232. 用栈实现队列', () => {
  const queue = new MyQueue<number>();
  // ["MyQueue","push","push","push","push","pop", "push", "pop", "pop","pop","pop"]
  // [null,null,null,null,null,1,null,2,3,4,5]

  queue.push(1);
  queue.push(2);
  queue.push(3);
  queue.push(4);
  expect(queue.pop()).equal(1);
  queue.push(5);
  expect(queue.pop()).equal(2);
  expect(queue.pop()).equal(3);
  expect(queue.pop()).equal(4);
  expect(queue.pop()).equal(5);
});
