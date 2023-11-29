import { describe, test, expect, beforeEach } from 'vitest';
import { kruskal, prim } from '../ts_data/MST';

describe('test MST', () => {
  let graph: number[][];
  beforeEach(() => {
    const i = Infinity;
    graph = [
      [0, 2, 4, 1, i, i, i],
      [2, 0, i, 3, 10, i, i],
      [4, i, 0, 2, i, 5, i],
      [1, 3, 2, 0, 7, 8, 4],
      [i, 10, i, 7, 0, i, 6],
      [i, i, 5, 8, i, 0, 1],
      [i, i, i, 4, 6, 1, 0],
    ];
  });
  test('Prim算法', () => {
    expect(prim(graph)).toEqual([
      { edge: [0, 3], weight: 1 },
      { edge: [0, 1], weight: 2 },
      { edge: [2, 3], weight: 2 },
      { edge: [3, 6], weight: 4 },
      { edge: [5, 6], weight: 1 },
      { edge: [4, 6], weight: 6 },
    ]);
  });
  test('Kruskal算法', () => {
    expect(kruskal(graph)).toEqual([
      { edge: [0, 3], weight: 1 },
      { edge: [5, 6], weight: 1 },
      { edge: [0, 1], weight: 2 },
      { edge: [2, 3], weight: 2 },
      { edge: [3, 6], weight: 4 },
      { edge: [4, 6], weight: 6 },
    ]);
  });
});
