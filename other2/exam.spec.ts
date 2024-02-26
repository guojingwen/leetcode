import { expect, test } from 'vitest';
import { reverNum, solution1, solution } from './exam.ts';

test('reverNum', () => {
  // expect(reverNum(0)).toEqual(0);
  expect(reverNum(123)).toEqual(321);
  // expect(reverNum(100)).toEqual(1);
});

test('solution1', () => {
  expect(solution1('0')).toEqual('0');
  // expect(solution1('')).toEqual('0');
  // expect(solution1('00')).toEqual('0');
  // expect(solution1('000')).toEqual('0');
  // expect(solution1('123')).toEqual('3');
  // expect(solution1('899')).toEqual('989');
  // expect(solution1('8997')).toEqual('989');
  // expect(solution1('89197')).toEqual('989');
  // expect(solution1('89797')).toEqual('97879');
  // expect(solution1('897976')).toEqual('97879');
  // expect(solution1('897978')).toEqual('987789');
  // expect(solution1('807078')).toEqual('870078');
  // expect(solution1('80778')).toEqual('87078');
});

test('solution', () => {
  expect(solution('4 5 6 - 7 +')).toEqual(8);
  expect(solution('13 DUP 4 POP 5 DUP + DUP + -')).toEqual(7);
  expect(solution('5 6 + -')).toEqual(-1);
  expect(solution('3 DUP 5 - -')).toEqual(-1);
  expect(solution('1048575 DUP +')).toEqual(-1);
  expect(solution('1048575 DUP -')).toEqual(0);
  expect(solution('')).toEqual(-1);
  expect(solution('s')).toEqual(-1);
  expect(solution('12')).toEqual(12);
  expect(solution('12 34')).toEqual(34);
  expect(solution('12 34 -')).toEqual(22);
  expect(solution('5 2 52 -')).toEqual(50);
  expect(solution('5 2 - 52 -')).toEqual(-1);
  expect(solution('-5 2 - 57 -')).toEqual(50);
  expect(solution('1048571 DUP +')).toEqual(-1);
  expect(solution('1048571 DUP -')).toEqual(0);
  expect(solution('1048571 DUP - POP')).toEqual(-1);
  expect(solution('DUP')).toEqual(-1);
  expect(solution('123 +')).toEqual(-1);
  expect(solution('123  23 POP -')).toEqual(-1);
  expect(solution('123     23    POP')).toEqual(123);
});
