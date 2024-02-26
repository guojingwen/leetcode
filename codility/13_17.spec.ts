import { expect, test } from 'vitest';
import {
  solution14_1,
  solution15_4,
  solution16_1,
  solution16_2,
  solution16_3,
  solution13_1,
  solution_dp1,
} from './13_17.ts';

test('solution_dp1', () => {
  expect(solution_dp1([1, -2, 0, 9, -1, -2])).toEqual(8);
  expect(solution_dp1([1, 0])).toEqual(1);
  expect(solution_dp1([1, 0, -2])).toEqual(-1);
  expect(solution_dp1([1, -2, 0])).toEqual(1);
});

test('solution16_1', () => {
  expect(solution16_1([1, 3, 7, 9, 9], [5, 6, 8, 9, 10])).toEqual(3);
});
test('solution16_2', () => {
  expect(solution16_2(4, [1, 2, 3, 4, 1, 1, 3])).toEqual(3);
  expect(solution16_2(1, [1])).toEqual(0);
  expect(solution16_2(2, [1])).toEqual(0);
  expect(solution16_2(2, [1, 1])).toEqual(0);
  expect(solution16_2(2, [1, 2])).toEqual(1);
});
test('solution16_3', () => {
  expect(solution16_3(6, [3, 4, 5, 5, 2])).toEqual(9);
  expect(solution16_3(6, [1, 2, 3, 4])).toEqual(10);
  expect(solution16_3(6, [1, 2, 3, 4, 4])).toEqual(11);
  expect(solution16_3(6, [1, 2, 3, 4, 2])).toEqual(11);
  expect(solution16_3(6, [1, 1])).toEqual(2);
});

test('solution15_4', () => {
  expect(solution15_4([1, 4, -3])).toEqual(1);
  expect(solution15_4([0])).toEqual(0);
  expect(solution15_4([-2])).toEqual(4);
  expect(solution15_4([-2, -1])).toEqual(2);
  expect(solution15_4([-2, -1, 3])).toEqual(1);
  expect(solution15_4([-2, -1, 0])).toEqual(0);
  expect(solution15_4([-2, -1, 1, 2, 3])).toEqual(0);
});

test('solution14_1', () => {
  expect(solution14_1(3, 5, [2, 1, 5, 1, 2, 2, 2])).toEqual(6);
  expect(solution14_1(5, 5, [2, 1, 5])).toEqual(5);
  expect(solution14_1(1, 5, [2, 1, 5])).toEqual(8);
  expect(solution14_1(3, 5, [1])).toEqual(1);
  expect(solution14_1(2, 5, [1, 3, 5, 1])).toEqual(6);
});

test('solution13_1', () => {
  // expect(solution13_1([0, 0, 0])).toEqual(-1);
  // expect(solution13_1([0, 0, 0, 0])).toEqual(1);
  // expect(solution13_1([1, 1, 1, 1])).toEqual(1);
  // expect(solution13_1([0])).toEqual(1);
  // expect(solution13_1([1])).toEqual(1);
  // expect(solution13_1([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0])).toEqual(3);
  // expect(solution13_1([1, 1, 0, 0, 0])).toEqual(2);
});
