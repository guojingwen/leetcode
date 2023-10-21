import { expect, test } from 'vitest';
import { convert } from '../ts/6.convert';

test('x', () => {
  expect(convert('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR');
  expect(convert('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI');
  expect(convert('AB', 1)).toEqual('AB');
});
