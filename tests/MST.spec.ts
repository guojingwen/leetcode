import { describe, test, expect } from 'vitest';
import { Graph } from '../ts_data/Graph';
import { prim } from '../ts_data/MST';

describe('test MST', () => {
  const graph = [
    /*
     v1 v2 v3 v4 v5 v6 */
    [0, 2, 4, 1, 0, 0, 0], // v1
    [2, 0, 0, 3, 10, 0, 0], // v2
    [4, 0, 0, 2, 0, 5, 0], // v3
    [1, 3, 2, 0, 7, 8, 4], // v4
    [0, 10, 0, 7, 0, 0, 6], // v5
    [0, 0, 0, 2, 2, 0, 0], // v6
    [0, 0, 0, 5, 6, 1, 0], // v7
  ];
  test('Prim算法', () => {
    expect(prim(graph)).toEqual([
      { edge: [0, 3], weight: 1 },
      { edge: [1, 2], weight: 2 },
      { edge: [0, 1], weight: 2 },
      { edge: [0, 1], weight: 2 },
      { edge: [0, 1], weight: 2 },
    ]);
  });
});
