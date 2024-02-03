import { expect, test } from 'vitest';
import {
  solution,
  solution4_1,
  solution4_2,
  solution4_3,
  solution4_4,
  solution5_1,
  solution6_1,
  solution6_4,
} from './4_6.ts';

test('solution', () => {
  expect(solution([3, 1, 2, 4, 3])).toEqual(1);
  expect(solution([1, -1, 0])).toEqual(0);
  expect(solution([-1, -3, -2])).toEqual(2);
  expect(solution([-10, 10])).toEqual(20);
});

test('solution4_1', () => {
  expect(solution4_1(5, [1, 3, 1, 4, 2, 3, 5, 4])).toEqual(6);
  expect(solution4_1(4, [1, 2, 3])).toEqual(-1);
  expect(solution4_1(3, [1, 2, 3])).toEqual(2);
  expect(solution4_1(3, [1, 2, 1])).toEqual(-1);
  expect(solution4_1(3, [1, 2, 1, 3, 1, 1])).toEqual(3);
  expect(solution4_1(5, [1, 2, 3, 5, 2, 1])).toEqual(-1);
  expect(solution4_1(5, [1, 2, 3, 5, 2, 1, 4])).toEqual(6);
});
// npx vitest run other2/test.spec.ts

test('solution4_2', () => {
  expect(solution4_2([1, 2, 3, 4])).toEqual(1);
  // expect(solution4_2([])).toEqual(1);
  expect(solution4_2([1])).toEqual(1);
  expect(solution4_2([1, 1])).toEqual(0);
  expect(solution4_2([2])).toEqual(0);
  expect(solution4_2([1, 2, 4])).toEqual(0);
  expect(solution4_2([2, 3, 4])).toEqual(0);
  expect(solution4_2([1, 1, 2, 3, 4])).toEqual(0);
  expect(solution4_2([2, 1, 3, 3, 4])).toEqual(0);
});

test('solution4_3', () => {
  expect(solution4_3(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([
    3, 2, 2, 4, 2,
  ]);
  expect(solution4_3(1, [1])).toEqual([1]);
  expect(solution4_3(1, [1, 1, 1])).toEqual([3]);
  expect(solution4_3(1, [1, 2])).toEqual([1]);
  expect(solution4_3(1, [1, 2, 1])).toEqual([2]);
  expect(solution4_3(2, [1, 2, 2])).toEqual([1, 2]);
  expect(solution4_3(2, [1, 1, 1])).toEqual([3, 0]);
  expect(solution4_3(2, [3, 3, 1])).toEqual([1, 0]);
  expect(solution4_3(2, [1, 3, 3, 1])).toEqual([2, 1]);
  expect(solution4_3(2, [1, 3, 3, 1, 3])).toEqual([2, 2]);
  expect(solution4_3(2, [1, 3, 3, 1, 3, 2, 2, 2, 3])).toEqual([5, 5]);
  expect(solution4_3(3, [2, 2, 2, 4, 1])).toEqual([4, 3, 3]);
  expect(solution4_3(3, [2, 2, 2, 1])).toEqual([1, 3, 0]);
});

test('solution4_4', () => {
  // expect(solution4_4([1, 3, 6, 4, 1, 2])).toEqual(5);
  expect(solution4_4([1, 3, 6, 4, 1, 2])).toEqual(5);
  expect(solution4_4([1, 2, 3])).toEqual(4);
  expect(solution4_4([-2, -4])).toEqual(1);
  expect(solution4_4([-0])).toEqual(1);
  expect(solution4_4([-0, 2])).toEqual(1);
  expect(solution4_4([-0, 2, 1])).toEqual(3);
  expect(solution4_4([4])).toEqual(1);
  expect(solution4_4([4, 9, 1])).toEqual(2);
  expect(solution4_4([2, 4, 1])).toEqual(3);
  expect(solution4_4([2, 4, 1, 3])).toEqual(5);
  expect(solution4_4([])).toEqual(1);
});

test('solution5_1', () => {
  expect(solution5_1([1])).toEqual(0);
  expect(solution5_1([0])).toEqual(0);
  expect(solution5_1([1, 0])).toEqual(0);
  expect(solution5_1([0, 1])).toEqual(1);
  expect(solution5_1([1, 0, 0])).toEqual(0);
  expect(solution5_1([1, 0, 0, 1])).toEqual(2);
  expect(solution5_1([1, 0, 0, 1, 1, 1])).toEqual(6);
  expect(solution5_1([0, 1, 0, 1, 1, 1])).toEqual(7);
});

test('solution6_1', () => {
  expect(solution6_1([])).toEqual(0);
  expect(solution6_1([1, 3])).toEqual(2);
  expect(solution6_1([3, 3])).toEqual(1);
  expect(solution6_1([-3, 3, 0])).toEqual(3);
  expect(solution6_1([-0, 0])).toEqual(1);
});

test('solution6_4', () => {
  expect(solution6_4([1, 5, 2, 1, 4, 0])).toEqual(11);
  expect(solution6_4([])).toEqual(0);
  expect(solution6_4([2])).toEqual(0);
  expect(solution6_4([1, 2, 3])).toEqual(3);
  // [0, 2] [1, 2], [2, 3], [3, 4]
  expect(solution6_4([1, 2, 3, 4])).toEqual(6);
  expect(solution6_4([1, 2, 2])).toEqual(3);
  expect(solution6_4([1, 2, 2, 1])).toEqual(5);
  expect(solution6_4([1, 1, 1])).toEqual(3);
  expect(solution6_4([1, 2, 2, 1, 1])).toEqual(8);
});
