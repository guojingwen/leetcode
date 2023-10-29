import { describe, expect, test } from 'vitest';
import { dijkstra, floyed, prim } from '../ts_data/WeightedGraphAlgorithm';

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
  const result = dijkstra(graph, 0);
  test('Digkstra', () => {
    expect(result).toEqual([0, 6, 9, 8, 9, 7]);
  });
});

describe('有权图 Floyd 算法', () => {
  test('三阶', () => {
    const graph = [
      [0, 6, 13],
      [10, 0, 4],
      [5, Infinity, 0],
    ];
    expect(floyed(graph)).toEqual({
      graph: [
        [0, 6, 10],
        [9, 0, 4],
        [5, 11, 0],
      ],
      path: [
        [-1, -1, 1],
        [2, -1, -1],
        [-1, 0, -1],
      ],
    });
  });
  test('5阶', () => {
    const graph = [
      [0, Infinity, 1, Infinity, 10],
      [Infinity, 0, Infinity, 1, 5],
      [Infinity, 1, 0, Infinity, 7],
      [Infinity, Infinity, Infinity, 0, 1],
      [Infinity, Infinity, Infinity, Infinity, 0],
    ];
    expect(floyed(graph)).toEqual({
      graph: [
        [0, 2, 1, 3, 4],
        [Infinity, 0, Infinity, 1, 2],
        [Infinity, 1, 0, 2, 3],
        [Infinity, Infinity, Infinity, 0, 1],
        [Infinity, Infinity, Infinity, Infinity, 0],
      ],
      path: [
        [-1, 2, -1, 2, 3],
        [-1, -1, -1, -1, 3],
        [-1, -1, -1, 1, 3],
        [-1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1],
      ],
    });
  });
});
