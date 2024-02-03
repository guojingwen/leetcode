import { describe, expect, test } from 'vitest';
import {
  horseTreads,
  ratInAMaze,
  restoreIP,
} from '../ts_algorithm/backtrack';

describe('test 马踏棋盘', () => {
  test('3 * 4的棋盘，起点00', () => {
    const chessBorads = horseTreads(3, 4, 0, 0);
    expect(chessBorads).toEqual([
      [1, 8, 3],
      [4, 11, 6],
      [7, 2, 9],
      [10, 5, 12],
    ]);
  });
});

describe('test 马踏棋盘', () => {
  test('3 * 4的棋盘，起点00', () => {
    const chessBorads = ratInAMaze([
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 1, 0],
      [0, 1, 1, 1],
    ]);
    expect(chessBorads).toEqual([
      [1, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 1],
    ]);
  });
});

describe('test IP复原', () => {
  test('test IP复原', () => {
    const realIp = restoreIP('25525511135');
    expect(realIp).toEqual('255.255.11.135');
  });
});
