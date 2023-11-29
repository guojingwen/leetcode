import { expect, test } from 'vitest';
import { solveNQueens } from '../ts/51.solveNQueens';

test('51 solveNQueens', () => {
  // expect(solveNQueens(1)).toEqual([['Q']]);
  expect(solveNQueens(4)).toEqual([
    ['.Q..', '...Q', 'Q...', '..Q.'],
    ['..Q.', 'Q...', '...Q', '.Q..'],
  ]);
});
