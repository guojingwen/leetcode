import { test, expect, describe, beforeEach } from 'vitest';
import { cancellable, findNum } from './lvshang';

test('findNum', () => {
  expect(findNum([1, 3, 2, 3])).toEqual(3);
});

describe('cancellable', () => {
  const tasks = function* () {
    const val = yield 2 + 2;
    yield new Promise((resolve, reject) => {
      setTimeout(resolve, 100);
    });
    return val + 1;
  };
  test('正常', async () => {
    const [abort, p] = cancellable(tasks());
    const res = await p;
    expect(res).toEqual(5);
  });
  test('abort', async () => {
    const [abort, p] = cancellable(tasks());
    setTimeout(() => {
      abort();
    }, 50);
    const res = await p.catch((_) => _);
    expect(res).toEqual('Cancelled');
  });
});
