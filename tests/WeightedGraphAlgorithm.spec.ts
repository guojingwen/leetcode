import { describe, expect, test } from 'vitest';
import { dijkstra } from '../ts_data/WeightedGraphAlgorithm';

describe('有权图 Digkstra 算法', () => {
  const graph = [
    /**
     A  B  C  D  E  F */
    [0, 6, 9, 8, 0, 7], // A
    [6, 0, 5, 0, 0, 0], // B
    [9, 5, 0, 3, 2, 0], // C
    [8, 0, 3, 0, 1, 0], // D
    [0, 0, 2, 1, 0, 3], // E
    [7, 0, 0, 0, 3, 0], // F
  ];
  const result = dijkstra(graph);
  console.log(result);
  test('Digkstra', () => {
    expect(result).toEqual([0, 6, 9, 8, 9, 7]);
  });
});
