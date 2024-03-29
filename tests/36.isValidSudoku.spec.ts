import { expect, test } from 'vitest';
import { isValidSudoku } from '../ts/36.isValidSudoku';

test('isValidSudoku', () => {
  const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ];
  expect(isValidSudoku(board)).toEqual(true);
  const board2 = [
    ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
    ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
    ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
    ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
    ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
  ];
  expect(isValidSudoku(board2)).toEqual(false);
  const board3 = [
    ['.', '.', '.', '.', '.', '.', '5', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['9', '3', '.', '.', '2', '.', '4', '.', '.'],
    ['.', '.', '7', '.', '.', '.', '3', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '3', '4', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '3', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '5', '2', '.', '.'],
  ];
  expect(isValidSudoku(board3)).toEqual(false);
  const board4 = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '9', '.', '.', '.', '.', '.', '.', '1'],
    ['8', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '9', '9', '3', '5', '7', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '4', '.'],
    ['.', '.', '.', '8', '.', '.', '.', '.', '.'],
    ['.', '1', '.', '.', '.', '.', '4', '.', '9'],
    ['.', '.', '.', '5', '.', '4', '.', '.', '.'],
  ];
  expect(isValidSudoku(board4)).toEqual(false);
});
