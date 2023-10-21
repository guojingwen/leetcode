import { expect, test } from 'vitest';
import { Queue } from '../ts_data/queue';

test('Queue', () => {
  const queue = new Queue<string>();
  queue.enqueue('A');
  queue.enqueue('B');
  expect(queue.toString()).toEqual('A, B');
  expect(queue.size).toEqual(2);
  expect(queue.dequeue()).toEqual('A');
  queue.clear();
  expect(queue.isEmpty).equal(true);
});
