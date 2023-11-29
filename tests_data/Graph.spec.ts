import { describe, test, expect, beforeEach } from 'vitest';
import {
  Graph,
  breadthFirstSearch,
  bfs,
  depthFirstSearch,
} from '../ts_data/Graph';

describe('test Graph', () => {
  let graph = new Graph<string>();
  beforeEach(() => {
    graph = new Graph<string>();
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('C', 'D');
    graph.addEdge('C', 'G');
    graph.addEdge('D', 'G');
    graph.addEdge('D', 'H');
    graph.addEdge('B', 'F');
  });
  test('toString', () => {
    const str = graph.toString();
    const str2 = `A -> BCD
B -> AF
C -> ADG
D -> ACGH
G -> CD
H -> D
F -> B`;
    // console.log(str2.length, str.length);
    expect(str).equals(str2);
  });
  test('BFS 广度优先遍历', () => {
    const result: string[] = [];
    breadthFirstSearch<string>(graph, 'A', (v: string) => {
      result.push(v);
    });
    expect(result.join('')).equals('ABCDFGH');
  });
  test('广度优先遍历寻找最短路径', () => {
    const result = bfs<string>(graph, 'A');
    expect(result).toEqual({
      distances: { A: 0, B: 1, C: 1, D: 1, F: 2, G: 2, H: 2 },
      predecessors: {
        A: null,
        B: 'A',
        C: 'A',
        D: 'A',
        F: 'B',
        G: 'C',
        H: 'D',
      },
    });
  });
  test('DFS 深度优先遍历', () => {
    const result: string[] = [];
    depthFirstSearch<string>(graph, 'A', (v: string) => {
      result.push(v);
    });
    expect(result.join('')).equals('ABFCDGH');
  });
});
