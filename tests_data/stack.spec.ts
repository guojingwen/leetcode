import { describe, expect, test } from 'vitest';
import {
  Calculator,
  Stack,
  calculatorByStack,
} from '../ts_data/Stack';

test('Stack', () => {
  const stack = new Stack<string>();
  stack.push('a');
  stack.push('b');
  expect(stack.size).toEqual(2);
  expect(stack.pop()).toEqual('b');
  expect(stack.peek()).toEqual('a');
  expect(stack.size).toEqual(1);
  stack.pop();
  expect(stack.size).toEqual(0);
});

test('中缀表达式', () => {
  expect(calculatorByStack('3 + 2 * 6 - 2')).equal(13);
  expect(calculatorByStack('7 * 2 * 2 - 5 + 1 - 5 + 3 - 4')).equal(
    18
  );
});

describe('使用栈实现计算器', () => {
  const calculator = new Calculator();
  // test('--', () => {
  //   expect(calculator.compute('(3+4)*5-6')).equal(29);
  // });
  test('--', () => {
    expect(calculator.compute('1+((2+3)*4)-5')).equal(16);
  });
});
